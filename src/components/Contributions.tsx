"use client";

import { useState, useEffect, useMemo } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

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
  currentStreak: number;
  longestStreak: number;
}

export default function Contributions() {
  const { personal } = portfolioData;
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  useEffect(() => {
    const username = "25Pradnyesh";

    async function fetchContributions() {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }

        const data = await response.json();

        if (!data || !data.contributions || !Array.isArray(data.contributions)) {
          throw new Error("Invalid GitHub data format");
        }

        const rawContributions: { date: string; count: number; level: number }[] =
          data.contributions;

        const contributions: ContributionDay[] = rawContributions.map((day) => ({
          date: day.date,
          count: day.count || 0,
          level: day.level || 0,
        }));

        // Calculate real streak metrics from verified daily data
        let total = 0;
        let longestStreak = 0;
        let runningStreak = 0;

        contributions.forEach((d) => {
          total += d.count;
          if (d.count > 0) {
            runningStreak++;
            if (runningStreak > longestStreak) {
              longestStreak = runningStreak;
            }
          } else {
            runningStreak = 0;
          }
        });

        // Calculate current streak from the latest days
        let currentStreak = 0;
        for (let i = contributions.length - 1; i >= 0; i--) {
          const day = contributions[i];
          if (i === contributions.length - 1 && day.count === 0) {
            // If today is 0, check if yesterday was active
            continue;
          }
          if (day.count > 0) {
            currentStreak++;
          } else {
            break;
          }
        }

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

        setGithubData({
          weeks,
          totalContributions: total,
          currentStreak,
          longestStreak,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

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
    <section
      id="contributions"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3 flex items-center justify-between">
        <h2 className="section-heading">GitHub Contributions</h2>
        {githubData && (
          <span className="font-mono text-xs text-[var(--muted-foreground)] tabular-nums">
            {githubData.totalContributions.toLocaleString()} contributions in the
            last year
          </span>
        )}
      </div>

      {/* Contribution Calendar Body */}
      <div className="border-b border-edge p-4 overflow-x-auto">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <span className="font-mono text-xs text-[var(--muted-foreground)] animate-pulse">
              Loading GitHub activity...
            </span>
          </div>
        ) : error || !githubData ? (
          <div className="flex items-center justify-center py-10">
            <span className="font-mono text-xs text-[var(--muted-foreground)]">
              GitHub activity unavailable
            </span>
          </div>
        ) : (
          <div className="min-w-[660px]">
            {/* Month Labels */}
            <div className="relative h-4 mb-1.5 ml-7">
              {monthLabels.map((m, i) => (
                <span
                  key={i}
                  className="font-mono text-[10px] text-[var(--muted-foreground)] absolute whitespace-nowrap"
                  style={{ left: `${m.colIndex * 13}px` }}
                >
                  {m.label}
                </span>
              ))}
            </div>

            {/* Grid with Weekday Labels */}
            <div className="flex">
              {/* Weekday labels */}
              <div className="flex flex-col gap-[3px] mr-1.5 shrink-0">
                {weekdayLabels.map((label, idx) => (
                  <div
                    key={idx}
                    className="h-[10px] flex items-center justify-end"
                    style={{ width: "22px" }}
                  >
                    <span className="font-mono text-[9px] text-[var(--muted-foreground)] leading-none">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Contribution cells */}
              <div className="flex gap-[3px]">
                {githubData.weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px]">
                    {week.days.map((day, dIdx) => (
                      <div
                        key={dIdx}
                        className={`contrib-cell relative size-[10px] rounded-[2px] ${getLevelClass(
                          day.level
                        )} transition-colors cursor-pointer`}
                        onMouseEnter={() =>
                          day.date ? setHoveredDay(day) : null
                        }
                        onMouseLeave={() => setHoveredDay(null)}
                      >
                        {hoveredDay === day && day.date && (
                          <div className="contrib-tooltip" style={{ opacity: 1 }}>
                            {day.count} contribution{day.count !== 1 ? "s" : ""}{" "}
                            on {formatDate(day.date)}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Summary Row */}
            <div className="flex items-center justify-between mt-3 font-mono text-[11px] text-[var(--muted-foreground)] ml-7">
              <div className="flex items-center gap-4">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
                >
                  @25Pradnyesh
                  <ArrowUpRight className="size-3" />
                </a>

                {githubData.currentStreak > 0 && (
                  <span>
                    Current streak:{" "}
                    <strong className="text-[var(--foreground)] font-medium">
                      {githubData.currentStreak}d
                    </strong>
                  </span>
                )}

                {githubData.longestStreak > 0 && (
                  <span>
                    Longest streak:{" "}
                    <strong className="text-[var(--foreground)] font-medium">
                      {githubData.longestStreak}d
                    </strong>
                  </span>
                )}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <div className="flex gap-[2px] items-center">
                  <div className="size-[9px] rounded-[2px] contrib-0" />
                  <div className="size-[9px] rounded-[2px] contrib-1" />
                  <div className="size-[9px] rounded-[2px] contrib-2" />
                  <div className="size-[9px] rounded-[2px] contrib-3" />
                  <div className="size-[9px] rounded-[2px] contrib-4" />
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
