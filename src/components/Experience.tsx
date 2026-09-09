"use client";

import { Code2, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Experience
        </h2>
      </div>

      {/* Timeline Items */}
      <div className="border-b border-[var(--edge)]">
        {experience.map((item, index) => (
          <div
            key={item.role}
            className={`border-b border-[var(--edge)] last:border-b-0 ${
              expandedIdx === index ? "bg-[var(--muted)]/20" : ""
            }`}
          >
            {/* Header row */}
            <button
              onClick={() =>
                setExpandedIdx(expandedIdx === index ? null : index)
              }
              className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 text-left hover:bg-[var(--muted)]/40 transition-colors group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex size-6 shrink-0 items-center justify-center rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                  <Code2 className="size-3" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--foreground)] truncate">
                    {item.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--muted-foreground)]">
                    {item.duration}
                  </p>
                </div>
              </div>
              <ChevronsUpDown className="size-3.5 text-[var(--muted-foreground)] shrink-0" />
            </button>

            {/* Expanded Content */}
            {expandedIdx === index && (
              <div className="px-4 sm:px-5 pb-4 pl-[52px] sm:pl-[56px] space-y-2.5">
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-1.5 py-0.5 rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
