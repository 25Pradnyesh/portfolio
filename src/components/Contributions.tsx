"use client";

import { useMemo } from "react";
import { portfolioData } from "@/data/portfolio";

export default function Contributions() {
  const { personal } = portfolioData;

  // Generate a contribution grid visual - can be connected to GitHub API later
  const { weeks, months } = useMemo(() => {
    const totalWeeks = 52;
    const daysPerWeek = 7;
    const grid: number[][] = [];

    for (let w = 0; w < totalWeeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        let level = 0;
        // Create realistic-looking activity patterns
        if (w > 38) {
          // Recent high activity
          const seed = (w * 7 + d * 13 + 3) % 17;
          if (seed > 12) level = 3;
          else if (seed > 7) level = 2;
          else if (seed > 3) level = 1;
        } else if (w > 22) {
          const seed = (w * 3 + d * 7 + 5) % 13;
          if (seed > 9) level = 2;
          else if (seed > 5) level = 1;
        } else if (w > 8) {
          const seed = (w * 5 + d * 11 + 2) % 19;
          if (seed > 14) level = 2;
          else if (seed > 10) level = 1;
        } else {
          const seed = (w * 4 + d * 9) % 11;
          if (seed > 8) level = 1;
        }
        week.push(level);
      }
      grid.push(week);
    }

    // Month labels positioned roughly
    const monthLabels = [
      "Sep", "Oct", "Nov", "Dec", "Jan", "Feb",
      "Mar", "Apr", "May", "Jun", "Jul", "Aug",
    ];

    return { weeks: grid, months: monthLabels };
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-900/50";
      case 2:
        return "bg-emerald-600/60";
      case 3:
        return "bg-emerald-400";
      default:
        return "bg-[var(--muted)]";
    }
  };

  return (
    <section className="screen-line-bottom">
      <div className="px-4 sm:px-5 py-5 border-b border-[var(--edge)] overflow-x-auto">
        {/* Month labels */}
        <div className="min-w-[640px]">
          <div className="flex font-mono text-[10px] text-[var(--muted-foreground)] mb-1.5 justify-between px-0">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Heatmap Grid */}
          <div className="flex gap-[3px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-[3px]">
                {week.map((level, dIdx) => (
                  <div
                    key={dIdx}
                    className={`size-[10px] rounded-[2px] ${getCellColor(level)} transition-colors hover:ring-1 hover:ring-[var(--foreground)]/30`}
                    title={`Activity level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between mt-2.5 font-mono text-[11px] text-[var(--muted-foreground)]">
            <a
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--foreground)] transition-colors hover:underline underline-offset-4"
            >
              Contributions on{" "}
              <span className="underline underline-offset-4">GitHub</span>.
            </a>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="flex gap-0.5 items-center">
                <div className="size-[10px] rounded-[2px] bg-[var(--muted)]" />
                <div className="size-[10px] rounded-[2px] bg-emerald-900/50" />
                <div className="size-[10px] rounded-[2px] bg-emerald-600/60" />
                <div className="size-[10px] rounded-[2px] bg-emerald-400" />
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
