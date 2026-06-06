"use client";

import { ReactNode, useEffect } from "react";

type PolicyDialogProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  badge: string;
  children: ReactNode;
};

export default function PolicyDialog({
  open,
  onClose,
  title,
  badge,
  children,
}: PolicyDialogProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6">
      <div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/30"
      >
        <div className="flex flex-col gap-4 px-8 py-6 md:flex-row md:items-start md:justify-between md:gap-8 border-b border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A45AFA]">
              {badge}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              {title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="px-8 py-6 text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

