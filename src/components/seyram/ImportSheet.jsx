import { UploadCloud } from "lucide-react";

const formats = ["PDF", "DOCX", "PPTX", "XLSX", "TXT", "IMAGE"];

export function ImportSheet({ onClose, onImport }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-foreground/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Import study material"
    >
      <div
        className="max-h-[85vh] w-[min(100%,620px)] overflow-auto rounded-t-[28px] border border-border p-5 pb-8 elev-4"
        style={{ background: "var(--gradient-raise)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mx-auto mb-5 h-1 w-11 rounded-full" style={{ background: "var(--color-surface-3)", boxShadow: "var(--shadow-inset)" }} />
        <h2 className="font-display text-[22px] font-extrabold">Import study material</h2>
        <p className="mb-5 mt-2 text-xs leading-relaxed text-muted-foreground">
          Bring your accounting documents into one library. Large files are stored locally so they stay readable
          offline.
        </p>

        <div className="surface-inset px-4 py-7 text-center">
          <span className="icon-tile mx-auto mb-3 h-14 w-14">
            <UploadCloud className="h-6 w-6" />
          </span>
          <h3 className="font-display text-sm font-bold">Choose a file from your phone</h3>
          <p className="mx-auto mt-1.5 max-w-xs text-[11px] text-muted-foreground">
            PDF, DOCX, PPTX, XLSX, TXT or an image of handwritten notes.
          </p>
          <button
            type="button"
            onClick={onImport}
            className="tactile touch-target mt-4 inline-flex items-center rounded-2xl px-6 text-sm font-bold text-primary-foreground elev-3"
            style={{ background: "var(--gradient-brand)" }}
          >
            Browse files
          </button>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {formats.map((f) => (
              <span
                key={f}
                className="rounded-lg border border-border bg-card px-2 py-1 text-[9px] font-extrabold text-muted-foreground elev-1"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="tactile-sm touch-target mt-4 w-full rounded-2xl text-sm font-bold text-muted-foreground"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
