"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          About
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / background
        </span>
      </div>

      {/* Panel Body */}
      <div className="p-4 sm:p-5 space-y-3.5 text-sm leading-relaxed text-[var(--muted-foreground)] font-mono">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-balance">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
