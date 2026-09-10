"use client";

import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">Experience</span>
      </div>

      {/* Experience Items */}
      <div className="border-b border-[var(--edge)]">
        {experience.map((item) => (
          <div
            key={item.role}
            className="flex items-start justify-between px-5 py-3.5 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors group"
          >
            <div className="min-w-0 flex-1">
              <h3 className="text-[13px] font-medium text-[var(--foreground)] leading-tight">
                {item.role}
              </h3>
              <p className="text-[12px] text-[var(--muted-foreground)] mt-0.5 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-x-1.5 mt-1.5">
                {item.tags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-[var(--muted-foreground)]/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 ml-4 pt-0.5 whitespace-nowrap">
              {item.duration}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
