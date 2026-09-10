"use client";

import { portfolioData } from "@/data/portfolio";

export default function Awards() {
  const { achievements } = portfolioData;

  return (
    <section
      id="awards"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3 flex items-center justify-between">
        <h2 className="section-heading">Honors & Awards</h2>
        <span className="font-mono text-[10px] text-[var(--muted-foreground)] tabular-nums">
          ({achievements.length})
        </span>
      </div>

      {/* Awards List */}
      <div className="border-b border-edge">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 px-4 py-4 border-b border-edge last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors ${
              index === 0 ? "bg-[var(--muted)]/10" : ""
            }`}
          >
            {/* Emoji Icon */}
            <span
              className="text-base shrink-0 pt-0.5 leading-none select-none"
              aria-hidden="true"
            >
              {item.emoji}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0 space-y-1">
              <div>
                <h3 className="text-sm font-medium text-[var(--foreground)] leading-tight">
                  {item.type} — {item.event}
                </h3>
                {item.project && (
                  <p className="font-mono text-xs text-[var(--muted-foreground)] mt-1">
                    {item.project}
                  </p>
                )}
                {item.description && (
                  <p className="text-xs text-[var(--muted-foreground)]/80 mt-1">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
