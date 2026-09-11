"use client";

import { portfolioData } from "@/data/portfolio";

export default function About() {
  const { about } = portfolioData;

  return (
    <section
      id="about"
      data-slot="panel"
      className="screen-line-before border-x border-b border-edge px-4 py-6 sm:px-6 sm:py-8"
    >
      {/* Seamless Bio Heading: Naturally flows into content without an internal horizontal dividing line */}
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-4">
        About
      </h2>

      {/* Bio Paragraphs */}
      <div className="space-y-3.5 font-sans text-sm sm:text-[14.5px] leading-relaxed text-zinc-400">
        {about.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
