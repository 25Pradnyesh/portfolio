"use client";

import { useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function MovingText() {
  const shouldReduceMotion = useReducedMotion();
  const { movingTextPhrases } = portfolioData;

  if (shouldReduceMotion) {
    return (
      <div className="border-y border-[var(--edge)] screen-line-bottom px-5 py-2 overflow-hidden select-none">
        <div className="flex items-center justify-center gap-4 font-mono text-[10px] tracking-[0.15em] text-[var(--muted-foreground)] uppercase">
          {movingTextPhrases.slice(0, 3).map((phrase, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{phrase}</span>
              {idx < 2 && (
                <span className="text-[var(--muted-foreground)]/30">—</span>
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
      className="border-y border-[var(--edge)] screen-line-bottom py-2 overflow-hidden select-none"
      aria-label="Status ticker"
    >
      <div className="flex w-max animate-marquee items-center font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--muted-foreground)]/60">
        {tickerItems.map((phrase, idx) => (
          <span key={idx} className="flex items-center shrink-0">
            <span className="px-4 hover:text-[var(--foreground)] transition-colors duration-300">
              {phrase}
            </span>
            <span className="text-[var(--muted-foreground)]/20 select-none">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
