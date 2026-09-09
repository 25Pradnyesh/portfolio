"use client";

import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;

  return (
    <section id="stack" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Stack
        </h2>
      </div>

      {/* Stack items as compact grouped tags */}
      <div className="px-4 sm:px-5 py-5 border-b border-[var(--edge)] space-y-5">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-[var(--muted-foreground)]">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2 py-1 rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--foreground)] hover:border-[var(--muted-foreground)]/50 transition-colors select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
