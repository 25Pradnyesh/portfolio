"use client";

import { useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function MovingText() {
  const shouldReduceMotion = useReducedMotion();
  const { movingTextPhrases } = portfolioData;

  if (shouldReduceMotion) {
    return (
      <div className="relative border-y border-edge h-8 sm:h-8.5 flex items-center justify-center overflow-hidden select-none bg-zinc-950/40 screen-line-before screen-line-after">
        <div className="flex items-center gap-4 font-mono text-[10.5px] sm:text-[11px] tracking-[0.2em] uppercase text-zinc-400">
          <span>AI × SOFTWARE × PRODUCT</span>
          <span className="text-zinc-600/60">/</span>
          <span>BUILDING AI PRODUCTS</span>
          <span className="text-zinc-600/60">/</span>
          <span>FULL-STACK SYSTEMS</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative border-y border-edge h-8 sm:h-8.5 flex items-center overflow-hidden select-none bg-zinc-950/40 screen-line-before screen-line-after"
      aria-label="Status ticker"
    >
      {/* Subtle diagonal background hatch matching reference */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "repeating-linear-gradient(315deg, var(--edge) 0, var(--edge) 1px, transparent 0, transparent 50%)",
          backgroundSize: "8px 8px",
        }}
      />

      {/* Marquee Track: Two identical halves for a 100% seamless, mathematically jump-free loop */}
      <div className="relative z-10 flex w-max animate-marquee items-center font-mono text-[10.5px] sm:text-[11px] tracking-[0.18em] uppercase text-zinc-400">
        <div className="flex items-center shrink-0">
          {movingTextPhrases.map((phrase, idx) => (
            <span key={`a-${idx}`} className="flex items-center shrink-0">
              <span className="px-5 hover:text-zinc-200 transition-colors">
                {phrase}
              </span>
              <span className="text-zinc-600/60 select-none">/</span>
            </span>
          ))}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {movingTextPhrases.map((phrase, idx) => (
            <span key={`b-${idx}`} className="flex items-center shrink-0">
              <span className="px-5 hover:text-zinc-200 transition-colors">
                {phrase}
              </span>
              <span className="text-zinc-600/60 select-none">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
