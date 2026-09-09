"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          About
        </h2>
      </div>

      {/* Body */}
      <div className="px-4 sm:px-5 py-5 space-y-3 border-b border-[var(--edge)]">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[15px] leading-relaxed text-[var(--muted-foreground)] font-mono"
          >
            <span className="text-[var(--muted-foreground)]/60 select-none mr-1.5">•</span>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
