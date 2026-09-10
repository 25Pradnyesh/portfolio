"use client";

import { portfolioData } from "@/data/portfolio";

export default function Stack() {
  const { skills } = portfolioData;

  return (
    <section
      id="stack"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">Stack</h2>
      </div>

      {/* Stack Grid */}
      <div className="border-b border-edge">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {skills.map((group, idx) => (
            <div
              key={group.category}
              className={`px-4 py-4 border-b border-edge ${
                idx % 2 === 0 ? "border-r" : ""
              } ${(idx + 1) % 3 !== 0 ? "sm:border-r" : "sm:border-r-0"}`}
            >
              <h3 className="font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--muted-foreground)] mb-2.5">
                {group.category}
              </h3>
              <div className="text-sm text-[var(--foreground)] leading-relaxed">
                {group.skills.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
