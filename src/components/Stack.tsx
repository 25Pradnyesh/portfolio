"use client";

import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;

  return (
    <section id="stack" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">Stack</span>
      </div>

      {/* Stack grid */}
      <div className="border-b border-[var(--edge)]">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {skills.map((group, idx) => (
            <div
              key={group.category}
              className={`px-5 py-4 border-b border-[var(--edge)] ${
                (idx + 1) % 3 !== 0 ? "sm:border-r" : ""
              } ${idx % 2 === 0 ? "border-r sm:border-r" : ""}`}
            >
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--muted-foreground)] mb-2">
                {group.category}
              </h3>
              <p className="text-[13px] text-[var(--foreground)] leading-relaxed">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
