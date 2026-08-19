#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function walk(dir, files=[]) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p, files);
    else files.push(p);
  }
  return files;
}

function ensureDir(file) {
  const d = path.dirname(file);
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function simpleTransform(content) {
  // remove `import type ...`
  content = content.replace(/^import\s+type\s+.*;\n?/gm, '');
  // remove `, type X` in imports
  content = content.replace(/,?\s*type\s+[^,}]+(?=[,}])/g, '');
  // remove export type/interface blocks
  content = content.replace(/export\s+(type|interface)\s+[^\{]*\{[\s\S]*?\};?/gm, '');
  // remove standalone `type Foo = ...`
  content = content.replace(/export\s+type\s+[^=]+=.*?;\n/gm, '');
  content = content.replace(/type\s+[^=]+=.*?;\n/gm, '');
  // remove generic annotations like foo<T> -> foo
  content = content.replace(/([A-Za-z0-9_\)\]\.])\s*<[^>]+>/g, '$1');
  // remove simple `: type` annotations in params/vars (best-effort)
  content = content.replace(/\:\s*([A-Za-z0-9_\[\]\<\>\{\}\|\s,?]+)(?=[,)=;\n])/g, '');
  // remove `as Type` assertions
  content = content.replace(/\s+as\s+[A-Za-z0-9_\.\[\]\<\>]+/g, '');
  // remove leading `declare `
  content = content.replace(/^declare\s+/gm, '');
  return content;
}

function tryEsbuildTransform(src, loader) {
  try {
    const esbuild = require('esbuild');
    const res = esbuild.transformSync(src, { loader, jsx: 'transform' });
    return res.code;
  } catch (e) {
    return null;
  }
}

function convertFile(file) {
  const ext = path.extname(file);
  const rel = path.relative(process.cwd(), file);
  if (!/\.tsx?$/.test(ext)) return false;
  const content = fs.readFileSync(file, 'utf8');
  const loader = ext === '.ts' ? 'ts' : 'tsx';
  let out = tryEsbuildTransform(content, loader);
  if (out == null) {
    out = simpleTransform(content);
  }
  const outExt = ext === '.ts' ? '.js' : '.jsx';
  const outPath = file.replace(/\.tsx?$/, outExt);
  ensureDir(outPath);
  fs.writeFileSync(outPath, out, 'utf8');
  return outPath;
}

function main() {
  const root = path.join(process.cwd(), 'src');
  const files = walk(root).filter(f => /\.tsx?$/.test(f));
  const converted = [];
  for (const f of files) {
    try {
      const out = convertFile(f);
      converted.push({ from: f, to: out });
      console.log('converted', f, '->', out);
    } catch (e) {
      console.error('failed', f, e.message);
    }
  }
  console.log('\nConverted', converted.length, 'files.');
}

main();
