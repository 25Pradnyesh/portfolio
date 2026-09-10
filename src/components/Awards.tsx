"use client";

import { portfolioData } from "@/data/portfolio";

export default function Awards() {
  const { achievements } = portfolioData;

  return (
    <section id="awards" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom flex items-center justify-between">
        <span className="section-heading">Honors & Awards</span>
        <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
          {achievements.length}
        </span>
      </div>

      {/* Awards List */}
      <div className="border-b border-[var(--edge)]">
        {achievements.map((item, index) => (
          <div
            key={index}
            className={`flex items-start gap-3 px-5 py-4 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors ${
              index === 0 ? "bg-[var(--muted)]/10" : ""
            }`}
          >
            {/* Emoji */}
            <span className="text-base shrink-0 pt-0.5 leading-none" aria-hidden="true">
              {item.emoji}
            </span>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={`text-[13px] font-medium leading-tight ${
                    index === 0
                      ? "text-[var(--foreground)]"
                      : "text-[var(--foreground)]"
                  }`}>
                    {item.type} — {item.event}
                  </h3>
                  {item.project && (
                    <p className="font-mono text-[11px] text-[var(--muted-foreground)] mt-0.5">
                      {item.project}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-[11px] text-[var(--muted-foreground)]/70 mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
