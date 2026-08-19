import { Bookmark, Highlighter, Type, Volume2, X } from "lucide-react";
import { useState } from "react";
import type { LibraryFile } from "./data";

export function Reader({
  file,
  onClose,
  onToast,
}: {
  file: LibraryFile;
  onClose: () => void;
  onToast: (msg: string) => void;
}) {
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="fixed inset-0 z-[120] overflow-auto bg-background" role="dialog" aria-modal="true" aria-label={file.title}>
      <div
        className="sticky top-0 z-10 flex items-center gap-3 border-b border-border px-4 py-3 backdrop-blur-xl"
        style={{ background: "color-mix(in oklab, var(--color-background) 88%, transparent)" }}
      >
        <button
          type="button"
          onClick={() => setConfirming(true)}
          aria-label="Close reader"
          className="tactile-sm surface-raised touch-target grid place-items-center rounded-2xl"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-display text-[13px] font-bold">{file.title}</h3>
          <p className="mt-0.5 text-[10px] text-muted-foreground">Page 38 of 59 • {file.course}</p>
        </div>
      </div>

      <article className="mx-auto mb-28 mt-5 w-[min(100%-24px,760px)] rounded-3xl border border-border p-6 elev-3"
        style={{ background: "var(--gradient-raise)" }}>
        <span className="badge-soft">IFRS 16 • Leases</span>
        <h1 className="mt-3 font-display text-[25px] font-extrabold leading-tight">
          Recognition and measurement of lease liabilities
        </h1>
        <p className="mt-4 text-sm leading-[1.75] text-foreground/85">
          At the commencement date, a lessee recognises a right-of-use asset and a lease liability. The purpose is
          to reflect the economic reality that the entity controls the use of an identified asset while also having
          an obligation to make lease payments.
        </p>
        <h2 className="mt-6 font-display text-[17px] font-extrabold text-primary">Initial measurement</h2>
        <p className="mt-2 text-sm leading-[1.75] text-foreground/85">
          The lease liability is initially measured at the present value of lease payments that are not paid at the
          commencement date. Those payments are discounted using the interest rate implicit in the lease, if that
          rate can be readily determined.
        </p>
        <div
          className="my-5 rounded-2xl border-l-4 border-primary p-4 font-display text-sm font-bold"
          style={{ background: "var(--color-primary-soft)", boxShadow: "var(--shadow-inset)" }}
        >
          PV = FV / (1 + r)<sup>n</sup>
        </div>
        <p className="mt-2 text-sm leading-[1.75] text-foreground/85">
          <mark
            className="rounded px-1 py-0.5"
            style={{ background: "color-mix(in oklab, var(--gold) 55%, transparent)", color: "var(--gold-foreground)", boxShadow: "var(--elevation-1)" }}
          >
            Exam tip: Where the implicit rate cannot be readily determined, the lessee normally uses its incremental
            borrowing rate.
          </mark>
        </p>
        <h2 className="mt-6 font-display text-[17px] font-extrabold text-primary">Subsequent measurement</h2>
        <p className="mt-2 text-sm leading-[1.75] text-foreground/85">
          After commencement, the liability is increased to reflect interest and reduced for lease payments made. The
          right-of-use asset is normally depreciated over the shorter of the asset’s useful life and the lease term,
          subject to the standard’s specific requirements.
        </p>
      </article>

      <div
        className="fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-1 rounded-3xl p-2 text-primary-foreground elev-4"
        style={{ background: "var(--gradient-brand)" }}
        role="toolbar"
        aria-label="Reader tools"
      >
        {[
          { Icon: Highlighter, label: "Highlight", msg: "Highlight saved" },
          { Icon: Bookmark, label: "Bookmark", msg: "Bookmark added" },
          { Icon: Volume2, label: "Listen", msg: "Reading aloud…" },
          { Icon: Type, label: "Text size", msg: "Text size options" },
        ].map(({ Icon, label, msg }) => (
          <button
            key={label}
            type="button"
            aria-label={label}
            onClick={() => onToast(msg)}
            className="tactile-sm touch-target grid place-items-center rounded-2xl"
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </div>

      {confirming && (
        <div className="fixed inset-0 z-30 grid place-items-center bg-foreground/45 p-5 backdrop-blur-sm">
          <div className="surface-raised w-full max-w-sm p-6 elev-4">
            <h3 className="font-display text-lg font-extrabold">Leave this document?</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your highlights and reading position are saved automatically before you exit.
            </p>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="tactile surface-inset touch-target flex-1 rounded-2xl text-sm font-bold"
              >
                Keep reading
              </button>
              <button
                type="button"
                onClick={() => {
                  setConfirming(false);
                  onClose();
                  onToast("Progress saved");
                }}
                className="tactile touch-target flex-1 rounded-2xl text-sm font-bold text-primary-foreground elev-3"
                style={{ background: "var(--gradient-brand)" }}
              >
                Save & close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
