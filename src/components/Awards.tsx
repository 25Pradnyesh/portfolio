"use client";

import { Trophy, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Awards() {
  const { achievements } = portfolioData;

  return (
    <section className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Honors &amp; Awards
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / recognition
        </span>
      </div>

      {/* Awards List */}
      <div className="divide-y divide-edge">
        {achievements.map((item) => (
          <div
            key={item.project}
            className={`p-4 sm:p-5 space-y-2 transition-colors ${
              item.isWinner
                ? "bg-emerald-950/20 dark:bg-emerald-950/30 border-l-2 border-l-emerald-500"
                : "hover:bg-[var(--muted)]/40"
            }`}
          >
            {/* Top row: Badge + Event */}
            <div className="flex items-center justify-between gap-2">
              {item.isWinner ? (
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono text-[11px] font-semibold tracking-wider uppercase">
                  <Trophy className="size-3 text-emerald-400" />
                  <span>{item.badge}</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[var(--muted)] border border-edge text-[var(--muted-foreground)] font-mono text-[11px] uppercase">
                  <Award className="size-3" />
                  <span>{item.badge}</span>
                </div>
              )}

              <span className="font-mono text-xs text-[var(--muted-foreground)]">
                {item.event}
              </span>
            </div>

            {/* Project title */}
            <h3 className="font-mono text-sm font-semibold text-[var(--foreground)] pt-0.5">
              {item.project}
            </h3>

            {/* Detail */}
            <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
              {item.detail}
            </p>

            {/* Stack if present */}
            {item.stack && (
              <p className="font-mono text-[11px] text-[var(--muted-foreground)] pt-0.5">
                Stack: {item.stack}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
