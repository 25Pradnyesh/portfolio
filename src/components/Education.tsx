"use client";

import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">Education</span>
      </div>

      {/* Education Items */}
      <div className="border-b border-[var(--edge)]">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between px-5 py-3.5 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors"
          >
            <div className="min-w-0">
              <h3 className="text-[13px] font-medium text-[var(--foreground)] leading-tight">
                {item.degree}
              </h3>
              <p className="font-mono text-[11px] text-[var(--muted-foreground)] mt-0.5">
                {item.institution}
              </p>
            </div>
            <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 ml-4 pt-0.5 whitespace-nowrap">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
