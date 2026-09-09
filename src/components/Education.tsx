"use client";

import { portfolioData } from "@/data/portfolio";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Education
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / academic
        </span>
      </div>

      {/* Editorial Timeline / List */}
      <div className="divide-y divide-edge">
        {education.map((item) => {
          // Determine top title vs subtitle
          const isHigherDegree = item.number === "01";
          const title = isHigherDegree ? item.degree : item.institution;
          const subtitle = isHigherDegree ? item.institution : item.degree;

          return (
            <div
              key={item.id}
              className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 hover:bg-[var(--muted)]/40 transition-colors"
            >
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs font-semibold text-[var(--muted-foreground)] pt-0.5 select-none shrink-0">
                  {item.number}
                </span>

                <div className="space-y-1">
                  <h3 className="font-mono text-sm font-semibold text-[var(--foreground)]">
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {subtitle}
                  </p>
                </div>
              </div>

              <div className="pl-7 sm:pl-0 shrink-0">
                <span className="font-mono text-xs text-[var(--muted-foreground)]">
                  {item.period}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
