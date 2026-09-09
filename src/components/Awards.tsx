"use client";

import { Award, ChevronsUpDown } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Awards() {
  const { achievements } = portfolioData;

  return (
    <section id="awards" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Honors & Awards{" "}
          <sup className="font-mono text-xs text-[var(--muted-foreground)] font-normal">
            ({achievements.length})
          </sup>
        </h2>
      </div>

      {/* Awards List */}
      <div className="border-b border-[var(--edge)]">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/40 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="flex size-6 shrink-0 items-center justify-center rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                <Award className="size-3" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-[var(--foreground)] truncate">
                  {item.event}
                </h3>
                <p className="font-mono text-xs text-[var(--muted-foreground)] flex items-center gap-1.5">
                  <span>{item.type}</span>
                  {item.project && (
                    <>
                      <span className="text-[var(--edge)]">|</span>
                      <span>{item.project}</span>
                    </>
                  )}
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
