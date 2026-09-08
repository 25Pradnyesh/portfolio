"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Experience
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / track record
        </span>
      </div>

      {/* Editorial Timeline Items */}
      <div className="p-4 sm:p-5 divide-y divide-edge">
        {experience.map((item, index) => (
          <div
            key={item.role}
            className={`space-y-2.5 ${index === 0 ? "pb-4" : index === experience.length - 1 ? "pt-4" : "py-4"}`}
          >
            {/* Role & Duration header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="font-mono text-sm font-semibold text-[var(--foreground)]">
                {item.role}
              </h3>
              <span className="font-mono text-xs text-[var(--muted-foreground)] shrink-0">
                {item.duration}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-1.5 py-0.5 bg-[var(--muted)] border border-edge rounded text-[var(--muted-foreground)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
