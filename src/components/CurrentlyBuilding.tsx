"use client";

import { Sparkles } from "lucide-react";

export default function CurrentlyBuilding() {
  const areas = [
    "AI",
    "Full-stack development",
    "Product engineering",
    "Generative AI",
    "AI agents",
    "Intelligent interfaces",
  ];

  return (
    <section className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Currently Building
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / active focus
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-3">
        <div className="flex items-center gap-2.5">
          <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-emerald-400">
            <Sparkles className="size-3.5" />
          </div>
          <p className="font-mono text-xs sm:text-sm text-[var(--foreground)] font-medium">
            Building and experimenting across:
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5 pl-8">
          {areas.map((area) => (
            <span
              key={area}
              className="font-mono text-xs px-2.5 py-1 rounded bg-[var(--muted)] border border-edge text-[var(--foreground)] hover:border-emerald-500/50 transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
