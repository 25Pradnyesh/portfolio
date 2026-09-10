"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">About</h2>
      </div>

      {/* Body */}
      <div className="border-b border-edge px-4 py-4 space-y-2.5">
        {about.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className="text-sm leading-relaxed text-[var(--muted-foreground)]"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
