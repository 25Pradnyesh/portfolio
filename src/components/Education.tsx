"use client";

import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">Education</h2>
      </div>

      {/* Education Items */}
      <div className="border-b border-edge">
        {education.map((item) => (
          <div
            key={item.id}
            className="px-4 py-4 border-b border-edge last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-[var(--foreground)] leading-tight">
                  {item.degree}
                </h3>
                <p className="font-mono text-xs text-[var(--muted-foreground)] mt-1">
                  {item.institution}
                </p>
              </div>
              <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 pt-0.5 whitespace-nowrap tabular-nums">
                {item.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
