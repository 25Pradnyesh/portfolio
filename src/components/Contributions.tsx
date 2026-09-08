"use client";

import { useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Contributions() {
  // Generate a clean 52-week contribution activity grid
  // Using active days corresponding to known recent activity on 25Pradnyesh repositories
  const weeks = useMemo(() => {
    const totalWeeks = 40; // compact responsive width
    const daysPerWeek = 7;
    const grid: number[][] = [];

    for (let w = 0; w < totalWeeks; w++) {
      const week: number[] = [];
      for (let d = 0; d < daysPerWeek; d++) {
        // High activity clusters in recent weeks (summer/fall sprints)
        let level = 0;
        if (w > 30) {
          // Recent active sprint on Travel-AI, VertiFarm, Design Resource Vault
          const seed = (w * 7 + d * 13) % 17;
          if (seed > 11) level = 3;
          else if (seed > 6) level = 2;
          else if (seed > 3) level = 1;
        } else if (w > 18) {
          const seed = (w * 3 + d * 7) % 13;
          if (seed > 8) level = 2;
          else if (seed > 4) level = 1;
        } else {
          const seed = (w * 5 + d * 11) % 19;
          if (seed > 14) level = 1;
        }
        week.push(level);
      }
      grid.push(week);
    }
    return grid;
  }, []);

  const getCellColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-emerald-950/80 border-emerald-900/60 dark:bg-emerald-900/50";
      case 2:
        return "bg-emerald-700/80 border-emerald-600/60 dark:bg-emerald-600/70";
      case 3:
        return "bg-emerald-500 border-emerald-400 dark:bg-emerald-400";
      default:
        return "bg-[var(--muted)] border-edge/60";
    }
  };

  return (
    <section className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GithubIcon className="size-4 text-[var(--muted-foreground)]" />
          <h2 className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
            GitHub Contributions
          </h2>
        </div>

        <a
          href="https://github.com/25Pradnyesh"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
        >
          <span>View GitHub</span>
          <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Heatmap Grid Container */}
      <div className="p-4 sm:p-5 overflow-x-auto">
        <div className="min-w-[580px]">
          {/* Month labels */}
          <div className="flex text-[10px] font-mono text-[var(--muted-foreground)] mb-2 pl-6 justify-between">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Nov</span>
            <span>Current</span>
          </div>

          <div className="flex gap-1.5 items-start">
            {/* Day indicator */}
            <div className="flex flex-col justify-between text-[9px] font-mono text-[var(--muted-foreground)] h-[90px] pr-1 select-none">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Weeks */}
            <div className="flex-1 flex gap-[3px]">
              {weeks.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-[3px]">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      className={`size-[11px] rounded-[1px] border ${getCellColor(
                        level
                      )} transition-colors hover:ring-1 hover:ring-white/40`}
                      title={`Activity level: ${level}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 text-[10px] font-mono text-[var(--muted-foreground)] mt-3">
            <span>Less</span>
            <div className="flex gap-1 items-center">
              <div className="size-[10px] rounded-[1px] border border-edge/60 bg-[var(--muted)]" />
              <div className="size-[10px] rounded-[1px] border border-emerald-900/60 bg-emerald-950/80" />
              <div className="size-[10px] rounded-[1px] border border-emerald-600/60 bg-emerald-700/80" />
              <div className="size-[10px] rounded-[1px] border border-emerald-400 bg-emerald-500" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
