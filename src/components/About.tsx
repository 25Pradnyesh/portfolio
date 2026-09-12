"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  const primaryIntro =
    about.primaryIntro ||
    "AI Engineer & Full-Stack Developer building products across AI, full-stack development and emerging technologies.";

  const building =
    about.building ||
    "I take vague ideas, turn them into working systems, and ship them — from hackathon prototypes to independent products.";

  const exploring =
    about.exploring?.join(" · ") ||
    "AI engineering · intelligent interfaces · AI systems · Web3 · product development";

  return (
    <section
      id="about"
      data-slot="panel"
      className="screen-line-before border-x border-b border-edge bg-[var(--background)] px-4 py-6 sm:px-6 sm:py-7"
    >
      <div className="max-w-[620px]">
        {/* LEVEL 1: Section Heading */}
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)] mb-6">
          About
        </h2>

        {/* Content Hierarchy with 20–24px vertical rhythm */}
        <div className="space-y-5 sm:space-y-6">
          {/* LEVEL 2: Primary Professional Positioning */}
          <p className="text-[15px] sm:text-[16.5px] font-medium leading-snug sm:leading-relaxed text-[var(--foreground)]">
            {primaryIntro}
          </p>

          {/* LEVEL 3 & 4: Building Block */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] sm:text-[10.5px] font-medium tracking-wider uppercase text-zinc-500 block">
              Building
            </span>
            <p className="text-sm sm:text-[14.5px] leading-relaxed text-zinc-400">
              {building}
            </p>
          </div>

          {/* LEVEL 3 & 4: Currently Exploring Block */}
          <div className="space-y-1.5">
            <span className="font-mono text-[10px] sm:text-[10.5px] font-medium tracking-wider uppercase text-zinc-500 block">
              Currently Exploring
            </span>
            <p className="text-sm sm:text-[14.5px] leading-relaxed text-zinc-400">
              {exploring}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

