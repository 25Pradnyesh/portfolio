"use client";

import { Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function CurrentlyBuilding() {
  const { personal } = portfolioData;

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
      <div className="p-4 sm:p-5 flex items-start gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-emerald-400 mt-0.5">
          <Sparkles className="size-3.5" />
        </div>
        <p className="font-mono text-sm text-[var(--foreground)] leading-relaxed">
          {personal.currentlyBuildingText}
        </p>
      </div>
    </section>
  );
}
