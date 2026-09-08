"use client";

import { GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Education
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / academic
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-4">
          <div className="flex size-8 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-[var(--foreground)] mt-0.5">
            <GraduationCap className="size-4" />
          </div>

          <div className="flex-1 space-y-1">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-mono text-sm font-semibold text-[var(--foreground)]">
                {education.degree} — {education.field}
              </h3>
              <span className="font-mono text-xs text-[var(--muted-foreground)]">
                {education.period}
              </span>
            </div>

            <p className="text-sm text-[var(--muted-foreground)]">
              {education.university}
            </p>

            <p className="font-mono text-xs text-[var(--muted-foreground)] pt-0.5">
              {education.college}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
