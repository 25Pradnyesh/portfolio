"use client";

import { portfolioData } from "@/data/portfolio";

export default function Interests() {
  const { interests } = portfolioData;

  return (
    <section id="exploring" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">Things I&apos;m Exploring</span>
      </div>

      {/* Flowing Tags */}
      <div className="px-5 py-5 border-b border-[var(--edge)]">
        <div className="flex flex-wrap gap-2">
          {interests.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 text-[12px] font-mono text-[var(--muted-foreground)] border border-[var(--edge)] rounded-sm hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]/50 transition-colors select-none"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
