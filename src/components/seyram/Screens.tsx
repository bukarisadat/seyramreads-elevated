import {
  BookOpen,
  Brain,
  ChevronRight,
  Download,
  Headphones,
  Highlighter,
  Layers,
  ScanLine,
  Search,
  Sigma,
  Sparkles,
  Table,
  Upload,
  Wifi,
  WifiOff,
} from "lucide-react";
import { useState } from "react";
import { aiCards, courses, coverTone, libraryFiles, quickActions, tools } from "./data";
import type { LibraryFile } from "./data";

const quickIcons = [Brain, Sigma, Layers, Headphones];
const toolIcons = [Table, Search, Highlighter];
const aiIcons = [Sparkles, Sigma, Layers, Brain];

function PageTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="mb-5 mt-2 px-0.5">
      <h1 className="font-display text-[28px] font-extrabold leading-tight">{title}</h1>
      <p className="mt-2 text-[13px] text-muted-foreground">{sub}</p>
    </div>
  );
}

function SectionHead({ title, sub, action, onAction }: { title: string; sub?: string; action?: string; onAction?: () => void }) {
  return (
    <div className="mb-3 flex items-end justify-between gap-4">
      <div>
        <h2 className="font-display text-xl font-extrabold">{title}</h2>
        {sub && <p className="mt-1 text-xs text-muted-foreground">{sub}</p>}
      </div>
      {action && (
        <button type="button" onClick={onAction} className="tactile-sm rounded-lg px-2 py-2 text-[13px] font-bold text-primary">
          {action}
        </button>
      )}
    </div>
  );
}

export function HomeScreen({
  onImport,
  onOpenReader,
  onGo,
  onToast,
}: {
  onImport: () => void;
  onOpenReader: () => void;
  onGo: (id: "library" | "ai" | "progress") => void;
  onToast: (msg: string) => void;
}) {
  return (
    <div className="space-y-7">
      <section className="surface-glass p-6 sm:p-8">
        <div className="relative">
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-bold"
            style={{ background: "hsl(0 0% 100% / 0.14)", borderColor: "hsl(0 0% 100% / 0.18)" }}
          >
            <span className="h-2 w-2 rounded-full bg-[oklch(0.85_0.14_160)] shadow-[0_0_0_4px_hsl(150_60%_70%/0.2)]" />
            Offline library available
          </span>
          <h1 className="max-w-[520px] font-display text-[30px] font-extrabold leading-[1.07] sm:text-[38px]">
            Your accounting study desk, in your pocket.
          </h1>
          <p className="mt-3 max-w-[510px] text-sm leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.78)" }}>
            Read IFRS notes, extract formulas, listen to documents, generate summaries and revise with
            flashcards — online or offline.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onImport}
              className="tactile touch-target inline-flex items-center gap-2 rounded-2xl bg-card px-5 text-sm font-bold text-primary elev-3"
            >
              <Upload className="h-5 w-5" /> Import document
            </button>
            <button
              type="button"
              onClick={() => onToast("Camera scanning is available in the mobile build")}
              className="tactile touch-target inline-flex items-center gap-2 rounded-2xl border px-5 text-sm font-bold"
              style={{ background: "hsl(0 0% 100% / 0.14)", borderColor: "hsl(0 0% 100% / 0.2)" }}
            >
              <ScanLine className="h-5 w-5" /> Scan notes
            </button>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {quickActions.map((a, i) => {
          const Icon = quickIcons[i];
          return (
            <button
              key={a.id}
              type="button"
              onClick={() => onGo("ai")}
              className="tactile surface-raised touch-target flex min-h-[136px] flex-col items-start p-4 text-left"
            >
              <span className="icon-tile mb-4">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-sm font-bold">{a.title}</h3>
              <p className="mt-1 text-xs leading-snug text-muted-foreground">{a.copy}</p>
            </button>
          );
        })}
      </section>

      <section>
        <SectionHead title="Continue reading" sub="Pick up where you stopped" action="View library" onAction={() => onGo("library")} />
        <button
          type="button"
          onClick={onOpenReader}
          className="tactile w-full rounded-3xl border border-border p-4 text-left elev-3"
          style={{ background: "var(--gradient-raise)" }}
        >
          <div className="grid grid-cols-[76px_1fr] gap-4">
            <div
              className="flex min-h-[104px] flex-col justify-between rounded-2xl p-3 text-[10px] font-bold uppercase tracking-wide text-primary-foreground elev-2"
              style={{ background: "var(--gradient-gold)" }}
            >
              <span>IFRS</span>
              <b className="font-display text-2xl leading-none">16</b>
              <span>Leases</span>
            </div>
            <div className="min-w-0">
              <span className="badge-soft">Financial Reporting</span>
              <h3 className="mt-2 font-display text-[15px] font-bold leading-snug">
                IFRS 16 — Leases: Recognition, Measurement & Disclosure
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">Page 38 of 59 • Last read today</p>
              <div className="mt-3 flex items-center gap-3">
                <div className="track h-2 flex-1">
                  <div className="track-fill" style={{ width: "64%" }} />
                </div>
                <b className="text-[11px] text-primary">64%</b>
              </div>
            </div>
          </div>
        </button>
      </section>

      <section>
        <SectionHead title="Your courses" sub="Documents organised for revision" action="Manage" onAction={() => onGo("library")} />
        <div className="flex snap-x gap-3 overflow-x-auto pb-2 [scrollbar-width:none]">
          {courses.map((c, i) => (
            <button
              key={c.code}
              type="button"
              onClick={() => onGo("library")}
              className="tactile relative min-h-[150px] w-[164px] shrink-0 snap-start overflow-hidden rounded-3xl p-4 text-left text-primary-foreground elev-3"
              style={{ background: Object.values(coverTone)[i % 4] }}
            >
              <small className="text-xs font-bold" style={{ color: "hsl(0 0% 100% / 0.75)" }}>
                {c.code}
              </small>
              <h3 className="mt-2 max-w-[110px] font-display text-lg font-extrabold leading-tight">{c.name}</h3>
              <span className="absolute bottom-4 left-4 text-[11px]" style={{ color: "hsl(0 0% 100% / 0.72)" }}>
                {c.docs} documents
              </span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <SectionHead title="Study tools" sub="Built for accounting documents" />
        <div className="grid gap-3">
          {tools.map((t, i) => {
            const Icon = toolIcons[i];
            return (
              <button
                key={t.title}
                type="button"
                onClick={() => onToast(`${t.title} opening…`)}
                className="tactile surface-raised touch-target flex w-full items-center gap-3 p-3 text-left"
              >
                <span className="icon-tile shrink-0">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm font-bold">{t.title}</span>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">{t.copy}</span>
                </span>
                <ChevronRight className="ml-auto h-5 w-5 shrink-0 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

const filters = [
  { id: "all", label: "All files" },
  { id: "far", label: "FAR" },
  { id: "tax", label: "Tax" },
  { id: "audit", label: "Audit" },
  { id: "offline", label: "Offline" },
];

export function LibraryScreen({ onOpen }: { onOpen: (file: LibraryFile) => void }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const files = libraryFiles.filter((f) => {
    const matchesFilter =
      filter === "all" ? true : filter === "offline" ? f.offline : f.filter === filter;
    const matchesQuery = f.title.toLowerCase().includes(query.trim().toLowerCase());
    return matchesFilter && matchesQuery;
  });

  return (
    <div>
      <PageTitle title="My Library" sub="All your accounting materials, available even when data is off." />
      <div className="surface-inset mb-4 flex items-center gap-3 px-4 py-3">
        <Search className="h-5 w-5 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents, standards, notes"
          aria-label="Search documents"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]" role="tablist" aria-label="Library filters">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            data-active={filter === f.id}
            onClick={() => setFilter(f.id)}
            className="chip tactile-sm"
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {files.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onOpen(f)}
            className="tactile surface-raised flex min-h-[196px] flex-col p-3 text-left"
          >
            <div
              className="flex h-[96px] flex-col justify-between rounded-2xl p-3 text-primary-foreground elev-2"
              style={{ background: coverTone[f.tone] }}
            >
              <span className="text-[10px] font-extrabold tracking-widest opacity-80">{f.type}</span>
              <b className="font-display text-base font-extrabold">{f.code}</b>
              <span className="text-[10px] opacity-80">{f.meta}</span>
            </div>
            <h3 className="mt-3 font-display text-[13px] font-bold leading-snug">{f.title}</h3>
            <p className="mt-1 text-[11px] text-muted-foreground">{f.course}</p>
            <div className="mt-auto flex items-center justify-between gap-2 pt-3">
              <span
                className="badge-soft"
                style={
                  f.offline
                    ? undefined
                    : { background: "var(--color-surface-3)", color: "var(--color-muted-foreground)" }
                }
              >
                {f.offline ? <WifiOff className="h-3 w-3" /> : <Wifi className="h-3 w-3" />}
                {f.offline ? "Offline" : "Online"}
              </span>
              <b className="text-[11px] text-primary">{f.progress}%</b>
            </div>
          </button>
        ))}
        {files.length === 0 && (
          <p className="col-span-full rounded-2xl p-6 text-center text-sm text-muted-foreground surface-inset">
            No documents match that search.
          </p>
        )}
      </div>
    </div>
  );
}

export function AiScreen({ onToast }: { onToast: (msg: string) => void }) {
  return (
    <div>
      <section className="surface-glass mb-5 p-6">
        <div className="relative">
          <span className="badge-soft" style={{ background: "hsl(0 0% 100% / 0.16)", color: "inherit" }}>
            <Sparkles className="h-3 w-3" /> Accounting AI
          </span>
          <h1 className="mt-3 font-display text-[25px] font-extrabold">Understand the hard parts faster.</h1>
          <p className="mt-2 max-w-[450px] text-[13px] leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.78)" }}>
            Select a document and let the study assistant simplify standards, explain accounting treatments,
            extract formulas or generate revision material.
          </p>
          <button
            type="button"
            onClick={() => onToast("Pick a document from your library")}
            className="tactile touch-target mt-5 inline-flex items-center gap-2 rounded-2xl bg-card px-5 text-sm font-bold text-primary elev-3"
          >
            <BookOpen className="h-5 w-5" /> Choose a document
          </button>
        </div>
      </section>

      <SectionHead title="AI study tools" sub="Online features • requires internet" />
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {aiCards.map((c, i) => {
          const Icon = aiIcons[i];
          return (
            <button
              key={c.title}
              type="button"
              onClick={() => onToast(`${c.title} needs an internet connection`)}
              className="tactile surface-raised touch-target flex min-h-[146px] flex-col items-start p-4 text-left"
            >
              <span className="icon-tile mb-3">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-sm font-bold">{c.title}</h3>
              <p className="mt-1 text-[11px] leading-snug text-muted-foreground">{c.copy}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ProgressScreen() {
  return (
    <div>
      <PageTitle title="Study Progress" sub="A simple view of how consistently you are moving through your courses." />
      <section className="surface-glass mb-5 p-6">
        <div className="relative flex items-center justify-between gap-6">
          <div>
            <span className="badge-soft" style={{ background: "hsl(0 0% 100% / 0.16)", color: "inherit" }}>
              This week
            </span>
            <h2 className="mt-3 font-display text-[28px] font-extrabold">4h 35m studied</h2>
            <p className="mt-2 text-[13px]" style={{ color: "hsl(0 0% 100% / 0.78)" }}>
              12% more focused reading than last week.
            </p>
          </div>
          <div
            className="grid h-[86px] w-[86px] shrink-0 place-items-center rounded-full font-display text-lg font-extrabold"
            style={{ background: "hsl(0 0% 100% / 0.14)", boxShadow: "var(--shadow-inset-deep)" }}
          >
            72%
          </div>
        </div>
      </section>

      <div className="surface-raised p-5">
        <SectionHead title="Course completion" sub="Based on documents you have opened" />
        <div className="grid gap-4">
          {courses.slice(0, 3).map((c) => (
            <div key={c.code}>
              <div className="mb-2 flex items-center justify-between text-[13px]">
                <span className="font-display font-bold">
                  {c.code} <span className="font-normal text-muted-foreground">· {c.name}</span>
                </span>
                <b className="text-primary">{c.completion}%</b>
              </div>
              <div className="track h-2.5">
                <div className="track-fill" style={{ width: `${c.completion}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Toggle({ on, onChange, label }: { on: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={on}
      aria-label={label}
      onClick={() => onChange(!on)}
      className="tactile-sm ml-auto h-[28px] w-[50px] shrink-0 rounded-full p-[3px]"
      style={{
        background: on ? "linear-gradient(160deg, var(--primary-2), var(--primary))" : "var(--color-surface-3)",
        boxShadow: "var(--shadow-inset)",
      }}
    >
      <span
        className="block h-[22px] w-[22px] rounded-full bg-card transition-transform duration-200 elev-2"
        style={{ transform: on ? "translateX(22px)" : "none" }}
      />
    </button>
  );
}

export function SettingsScreen({
  dark,
  onDark,
  offline,
  onOffline,
  sync,
  onSync,
}: {
  dark: boolean;
  onDark: (v: boolean) => void;
  offline: boolean;
  onOffline: (v: boolean) => void;
  sync: boolean;
  onSync: (v: boolean) => void;
}) {
  const rows = [
    { icon: Sparkles, title: "Dark mode", copy: "Comfortable late-night reading", on: dark, set: onDark },
    { icon: Download, title: "Keep downloads offline", copy: "Save imported files on this device", on: offline, set: onOffline },
    { icon: Wifi, title: "Sync notes when online", copy: "Backup progress, notes and highlights", on: sync, set: onSync },
  ];
  return (
    <div>
      <PageTitle title="Settings" sub="Control your reading experience, storage and sync preferences." />
      <div className="surface-raised flex items-center gap-4 p-5">
        <div
          className="grid h-[60px] w-[60px] place-items-center rounded-2xl font-display text-xl font-extrabold text-primary-foreground elev-2"
          style={{ background: "var(--gradient-brand)" }}
        >
          SA
        </div>
        <div>
          <h3 className="font-display text-[17px] font-extrabold">Stanley Accounting</h3>
          <p className="mt-1 text-xs text-muted-foreground">Accounting Student • 46 local documents</p>
        </div>
      </div>

      <div className="surface-raised mt-4 overflow-hidden p-0">
        {rows.map(({ icon: Icon, title, copy, on, set }, i) => (
          <div
            key={title}
            className="flex items-center gap-3 p-4"
            style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--color-border)" : undefined }}
          >
            <span className="icon-tile h-10 w-10">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <h4 className="text-[13px] font-bold">{title}</h4>
              <p className="mt-0.5 text-[11px] text-muted-foreground">{copy}</p>
            </div>
            <Toggle on={on} onChange={set} label={title} />
          </div>
        ))}
      </div>
    </div>
  );
}
