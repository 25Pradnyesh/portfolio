"use client";

import { portfolioData } from "@/data/portfolio";

export default function Interests() {
  const { interests } = portfolioData;

  return (
    <section
      id="exploring"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">Things I&apos;m Exploring</h2>
      </div>

      {/* Interest Tags */}
      <div className="border-b border-edge px-4 py-4">
        <div className="flex flex-wrap gap-2">
          {interests.map((item, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1.5 text-xs font-mono text-[var(--muted-foreground)] border border-edge bg-[var(--muted)]/30 hover:text-[var(--foreground)] hover:bg-[var(--muted)] hover:border-[var(--muted-foreground)]/30 rounded-md transition-colors select-none cursor-default"
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
