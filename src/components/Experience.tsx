"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section
      id="experience"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">Experience</h2>
      </div>

      {/* Experience Items */}
      <div className="border-b border-edge">
        {experience.map((item, idx) => (
          <div
            key={item.role}
            className={`px-4 py-4 border-b border-edge last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors group ${
              idx === 0 ? "bg-[var(--muted)]/10" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-[var(--foreground)] leading-tight">
                  {item.role}
                </h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1.5 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-2">
                  {item.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-[var(--muted-foreground)]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 pt-0.5 whitespace-nowrap tabular-nums">
                {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
