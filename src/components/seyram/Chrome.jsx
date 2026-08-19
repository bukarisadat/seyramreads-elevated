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
