import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Chrome({ children, onOpenMenu }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 mx-auto flex max-w-[980px] items-center gap-3 border-b border-border bg-transparent px-4 py-3 backdrop-blur">
        <button type="button" onClick={() => setOpen((s) => !s)} className="tactile-sm surface-inset touch-target rounded-2xl">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="min-w-0 flex-1">
          <h1 className="truncate font-display text-[15px] font-extrabold">Seyram Reads</h1>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="tactile surface-inset rounded-2xl px-3 py-2 text-sm font-bold">
            Sync
          </button>
        </div>
      </header>
      <main className="mx-auto max-w-[980px] p-4">{children}</main>
    </div>
  );
}

export function BottomNav({ active, onSelect }) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block w-full bg-background p-3 lg:hidden">
      <div className="mx-auto flex max-w-[980px] justify-around">
        <button onClick={() => onSelect('home')} aria-current={active === 'home'}>Home</button>
        <button onClick={() => onSelect('library')} aria-current={active === 'library'}>Library</button>
        <button onClick={() => onSelect('ai')} aria-current={active === 'ai'}>AI</button>
        <button onClick={() => onSelect('progress')} aria-current={active === 'progress'}>Progress</button>
        <button onClick={() => onSelect('settings')} aria-current={active === 'settings'}>Settings</button>
      </div>
    </nav>
  );
}

export function DesktopRail({ active, onSelect }) {
  return (
    <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:h-full lg:w-[250px] lg:block lg:py-6">
      <div className="mx-auto max-w-[220px]">
        <button onClick={() => onSelect('home')}>Home</button>
      </div>
    </aside>
  );
}

export function TopBar({ dark, onToggleDark }) {
  return (
    <div className="sticky top-0 z-40 mx-auto flex max-w-[980px] items-center gap-3 px-4 py-3">
      <div className="flex-1" />
      <button onClick={onToggleDark}>{dark ? 'Light' : 'Dark'}</button>
    </div>
  );
}
