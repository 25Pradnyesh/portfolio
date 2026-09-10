"use client";

import { useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function MovingText() {
  const shouldReduceMotion = useReducedMotion();
  const { movingTextPhrases } = portfolioData;

  if (shouldReduceMotion) {
    return (
      <div className="relative border-y border-edge py-2 overflow-hidden select-none screen-line-before screen-line-after before:content-none after:content-none">
        <div className="flex items-center justify-center gap-3 font-mono text-[10px] tracking-[0.15em] text-[var(--muted-foreground)] uppercase">
          {movingTextPhrases.slice(0, 2).map((phrase, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{phrase}</span>
              {idx < 1 && (
                <span className="text-[var(--muted-foreground)]/30">·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    );
  }

  const tickerItems = [...movingTextPhrases, ...movingTextPhrases];

  return (
    <div
      className="relative border-y border-edge py-2.5 overflow-hidden select-none screen-line-before screen-line-after before:content-none after:content-none before:absolute before:-left-[100vw] before:h-full before:w-[200vw] before:bg-[repeating-linear-gradient(315deg,var(--edge)_0,var(--edge)_1px,transparent_0,transparent_50%)] before:bg-[length:10px_10px] before:z-0 before:pointer-events-none"
      aria-label="Status ticker"
    >
      <div className="relative z-10 flex w-max animate-marquee items-center font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted-foreground)]">
        {tickerItems.map((phrase, idx) => (
          <span key={idx} className="flex items-center shrink-0">
            <span className="px-6 hover:text-[var(--foreground)] transition-colors duration-300">
              {phrase}
            </span>
            <span className="text-[var(--edge)] select-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
