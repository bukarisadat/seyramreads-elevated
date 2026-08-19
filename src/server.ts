// Compatibility shim: TanStack's virtual entry expects `src/server.ts`.
// Re-export the JS implementation so imports still resolve.
export { default } from './server.js';
