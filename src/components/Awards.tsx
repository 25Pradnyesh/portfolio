"use client";

import { portfolioData } from "@/data/portfolio";

export default function Awards() {
  const { achievements } = portfolioData;

  const getEmoji = (badge: string) => {
    switch (badge.toUpperCase()) {
      case "WINNER":
        return "🏆";
      case "HACKATHON":
        return "🚀";
      case "DEMO DAY":
        return "⚡";
      case "STARTUP WEEKEND":
        return "🎤";
      default:
        return "✨";
    }
  };

  return (
    <section id="awards" className="border-x border-b border-edge">
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
            {/* Top row: Badge with emoji + Event */}
            <div className="flex items-center justify-between gap-2">
              <div
                className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded font-mono text-[11px] uppercase ${
                  item.isWinner
                    ? "bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-semibold"
                    : "bg-[var(--muted)] border border-edge text-[var(--muted-foreground)]"
                }`}
              >
                <span className="text-xs select-none">{getEmoji(item.badge)}</span>
                <span>{item.badge}</span>
              </div>

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
