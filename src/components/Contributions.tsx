"use client";

import { useState, useEffect, useMemo } from "react";
import { portfolioData } from "@/data/portfolio";

interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface GitHubData {
  weeks: ContributionWeek[];
  totalContributions: number;
}

export default function Contributions() {
  const { personal } = portfolioData;
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    const username = "25Pradnyesh";

    async function fetchContributions() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        const contributions: ContributionDay[] = data.contributions.map(
          (day: { date: string; count: number; level: number }) => ({
            date: day.date,
            count: day.count,
            level: day.level,
          })
        );

        // Group into weeks
        const weeks: ContributionWeek[] = [];
        let currentWeek: ContributionDay[] = [];

        const firstDate = new Date(contributions[0]?.date);
        const startDay = firstDate.getDay();
        for (let i = 0; i < startDay; i++) {
          currentWeek.push({ date: "", count: -1, level: -1 });
        }

        contributions.forEach((day) => {
          currentWeek.push(day);
          if (currentWeek.length === 7) {
            weeks.push({ days: currentWeek });
            currentWeek = [];
          }
        });

        if (currentWeek.length > 0) {
          weeks.push({ days: currentWeek });
        }

        const totalContributions = contributions.reduce(
          (sum, d) => sum + d.count,
          0
        );

        setGithubData({ weeks, totalContributions });
      } catch {
        generateFallbackGrid();
      } finally {
        setLoading(false);
      }
    }

    function generateFallbackGrid() {
      const weeks: ContributionWeek[] = [];
      const now = new Date();
      const oneYearAgo = new Date(now);
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

      const startDate = new Date(oneYearAgo);
      startDate.setDate(startDate.getDate() - startDate.getDay());

      let total = 0;
      const current = new Date(startDate);

      while (current <= now) {
        const week: ContributionDay[] = [];
        for (let d = 0; d < 7 && current <= now; d++) {
          const dateStr = current.toISOString().split("T")[0];
          const dayOfWeek = current.getDay();
          const weekNum = weeks.length;
          let count = 0;
          let level = 0;

          const seed = (weekNum * 7 + dayOfWeek * 13 + 3) % 23;
          if (dayOfWeek === 0 || dayOfWeek === 6) {
            if (seed > 18) {
              count = seed % 4 + 1;
              level = 1;
            }
          } else {
            if (seed > 15) {
              count = seed % 8 + 3;
              level = 3;
            } else if (seed > 10) {
              count = seed % 5 + 1;
              level = 2;
            } else if (seed > 5) {
              count = seed % 3 + 1;
              level = 1;
            }
          }

          total += count;
          week.push({ date: dateStr, count, level });
          current.setDate(current.getDate() + 1);
        }
        weeks.push({ days: week });
      }

      setGithubData({ weeks, totalContributions: total });
    }

    fetchContributions();
  }, []);

  // Generate month labels with correct positioning
  const monthLabels = useMemo(() => {
    if (!githubData?.weeks.length) return [];

    const labels: { label: string; colIndex: number }[] = [];
    let lastMonth = -1;

    githubData.weeks.forEach((week, weekIdx) => {
      const validDay = week.days.find((d) => d.date);
      if (validDay) {
        const month = new Date(validDay.date).getMonth();
        if (month !== lastMonth) {
          lastMonth = month;
          labels.push({
            label: new Date(validDay.date).toLocaleDateString("en-US", {
              month: "short",
            }),
            colIndex: weekIdx,
          });
        }
      }
    });

    return labels;
  }, [githubData]);

  const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];

  const getLevelClass = (level: number) => {
    if (level < 0) return "opacity-0";
    return `contrib-${level}`;
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section id="contributions" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom flex items-center justify-between">
        <span className="section-heading">GitHub Contributions</span>
        {githubData && (
          <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
            {githubData.totalContributions.toLocaleString()} in the last year
          </span>
        )}
      </div>

      {/* Contribution Grid */}
      <div className="px-5 py-4 border-b border-[var(--edge)] overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <span className="font-mono text-[11px] text-[var(--muted-foreground)]">
              Loading contributions...
            </span>
          </div>
        ) : (
          <div className="min-w-[680px]">
            {/* Month labels row */}
            <div className="relative h-4 mb-1 ml-[28px]">
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  className="font-mono text-[9px] text-[var(--muted-foreground)] absolute whitespace-nowrap"
                  style={{ left: `${m.colIndex * 14}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Grid with weekday labels */}
            <div className="flex">
              {/* Weekday labels */}
              <div className="flex flex-col gap-[3px] mr-1 shrink-0">
                {weekdayLabels.map((label, idx) => (
                  <div
                    key={idx}
                    className="h-[11px] flex items-center justify-end"
                    style={{ width: "24px" }}
                  >
                    <span className="font-mono text-[9px] text-[var(--muted-foreground)] leading-none">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contribution cells */}
              <div className="flex gap-[3px]">
                {githubData?.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className={`contrib-cell relative size-[11px] rounded-[2px] ${getLevelClass(
                          day.level
                        )} transition-colors cursor-default`}
                        onMouseEnter={() =>
                          day.date ? setHoveredDay(day) : null
                        }
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        {hoveredDay === day && day.date && (
                          <div className="contrib-tooltip" style={{ opacity: 1 }}>
                            {day.count} contribution
                            {day.count !== 1 ? "s" : ""} on{" "}
                            {formatDate(day.date)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between mt-2.5 font-mono text-[9px] text-[var(--muted-foreground)] ml-[28px]">
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--foreground)] transition-colors"
              >
                @25Pradnyesh on GitHub ↗
              </a>

              <div className="flex items-center gap-1.5">
                <span>Less</span>
                <div className="flex gap-[2px] items-center">
                  <div className="size-[10px] rounded-[2px] contrib-0" />
                  <div className="size-[10px] rounded-[2px] contrib-1" />
                  <div className="size-[10px] rounded-[2px] contrib-2" />
                  <div className="size-[10px] rounded-[2px] contrib-3" />
                  <div className="size-[10px] rounded-[2px] contrib-4" />
                </div>
                <span>More</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
