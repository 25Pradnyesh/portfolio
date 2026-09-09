"use client";

import { Bookmark } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Interests() {
  const { interests } = portfolioData;

  return (
    <section className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Things I&apos;m Exploring{" "}
          <sup className="font-mono text-xs text-[var(--muted-foreground)] font-normal">
            ({interests.length})
          </sup>
        </h2>
      </div>

      {/* Interest Items */}
      <div className="border-b border-[var(--edge)]">
        {interests.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/40 transition-colors"
          >
            <div className="flex size-6 shrink-0 items-center justify-center rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]">
              <Bookmark className="size-3" />
            </div>
            <span className="text-sm font-medium text-[var(--foreground)]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
