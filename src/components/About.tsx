"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">About</span>
      </div>

      {/* Body */}
      <div className="px-5 py-5 space-y-3 border-b border-[var(--edge)]">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-[13px] leading-[1.7] text-[var(--muted-foreground)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
