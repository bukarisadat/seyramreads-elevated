import { Bell, Home, Library, Moon, Settings, Sparkles, Sun, TrendingUp } from "lucide-react";
import type { ScreenId } from "./data";

export const navItems: { id: ScreenId; label: string; short: string; Icon: typeof Home }[] = [
  { id: "home", label: "Home", short: "Home", Icon: Home },
  { id: "library", label: "My Library", short: "Library", Icon: Library },
  { id: "ai", label: "AI Study Tools", short: "AI Tools", Icon: Sparkles },
  { id: "progress", label: "Progress", short: "Progress", Icon: TrendingUp },
  { id: "settings", label: "Settings", short: "Settings", Icon: Settings },
];

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="grid h-11 w-11 place-items-center rounded-2xl text-primary-foreground elev-2"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      >
        <span className="font-display text-base font-extrabold">S</span>
      </div>
      {!compact && (
        <div>
          <p className="font-display text-[17px] font-extrabold leading-tight">SeyramReads</p>
          <p className="text-xs text-muted-foreground">Study smarter. Anywhere.</p>
        </div>
      )}
    </div>
  );
}

export function DesktopRail({
  active,
  onSelect,
}: {
  active: ScreenId;
  onSelect: (id: ScreenId) => void;
}) {
  return (
    <aside
      className="fixed inset-y-0 left-0 z-40 hidden w-[250px] flex-col p-5 text-primary-foreground lg:flex"
      style={{ background: "var(--gradient-brand)", boxShadow: "var(--elevation-4)" }}
    >
      <div className="mb-8 px-1">
        <BrandMark />
      </div>
      <nav className="grid gap-2" aria-label="Primary">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onSelect(id)}
              aria-current={isActive ? "page" : undefined}
              className="tactile-sm touch-target flex items-center gap-3 rounded-xl px-3 text-sm font-bold"
              style={
                isActive
                  ? { background: "hsl(0 0% 100% / 0.16)", boxShadow: "var(--elevation-2)" }
                  : { color: "hsl(0 0% 100% / 0.7)" }
              }
            >
              <Icon className="h-5 w-5" />
              {label}
            </button>
          );
        })}
      </nav>
      <div
        className="mt-auto rounded-2xl border p-4"
        style={{ background: "hsl(0 0% 100% / 0.1)", borderColor: "hsl(0 0% 100% / 0.14)" }}
      >
        <b className="font-display text-[13px]">Offline mode ready</b>
        <span className="mt-1.5 block text-[11px] leading-relaxed" style={{ color: "hsl(0 0% 100% / 0.68)" }}>
          Downloaded files, highlights and reading progress stay available without internet.
        </span>
      </div>
    </aside>
  );
}

export function TopBar({ dark, onToggleDark }: { dark: boolean; onToggleDark: () => void }) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between gap-4 px-4 py-3 backdrop-blur-xl lg:justify-end lg:px-8"
      style={{ background: "color-mix(in oklab, var(--color-background) 82%, transparent)" }}>
      <div className="lg:hidden">
        <BrandMark />
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onToggleDark}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="tactile-sm surface-raised touch-target grid place-items-center rounded-2xl text-foreground"
        >
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="tactile-sm surface-raised touch-target grid place-items-center rounded-2xl text-foreground"
        >
          <Bell className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

export function BottomNav({ active, onSelect }: { active: ScreenId; onSelect: (id: ScreenId) => void }) {
  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-5 gap-1 rounded-3xl border border-border p-2 backdrop-blur-xl lg:hidden"
      style={{
        background: "color-mix(in oklab, var(--color-card) 92%, transparent)",
        boxShadow: "var(--elevation-4)",
      }}
    >
      {navItems.map(({ id, short, Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => onSelect(id)}
            aria-current={isActive ? "page" : undefined}
            className="tactile-sm touch-target flex flex-col items-center justify-center gap-1 rounded-2xl text-[10px] font-bold"
            style={
              isActive
                ? {
                    background: "var(--color-primary-soft)",
                    color: "var(--color-primary)",
                    boxShadow: "var(--shadow-inset)",
                  }
                : { color: "var(--color-muted-foreground)" }
            }
          >
            <Icon className="h-5 w-5" />
            {short}
          </button>
        );
      })}
    </nav>
  );
}
