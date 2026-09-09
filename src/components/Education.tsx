"use client";

import { GraduationCap, ChevronsUpDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom flex items-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--foreground)]" />
        </span>
        <h2 className="text-base font-semibold tracking-tight text-[var(--foreground)]">
          Education
        </h2>
      </div>

      {/* Education Items */}
      <div className="border-b border-[var(--edge)]">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/40 transition-colors group"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex size-6 shrink-0 items-center justify-center rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                <GraduationCap className="size-3" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[var(--foreground)] truncate">
                  {item.degree} — {item.institution.split("(")[0].trim().split(",")[0]}
                </h3>
                <p className="font-mono text-xs text-[var(--muted-foreground)]">
                  {item.period}
                </p>
              </div>
            </div>
            <ChevronsUpDown className="size-3.5 text-[var(--muted-foreground)] shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}
