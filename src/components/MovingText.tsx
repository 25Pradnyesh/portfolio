"use client";

import { useReducedMotion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function MovingText() {
  const shouldReduceMotion = useReducedMotion();
  const { movingTextPhrases } = portfolioData;

  if (shouldReduceMotion) {
    return (
      <div className="border-b border-[var(--edge)] screen-line-bottom bg-[var(--muted)]/30 px-4 py-2.5 overflow-hidden select-none">
        <div className="flex items-center justify-center gap-4 font-mono text-[11px] tracking-widest text-[var(--muted-foreground)] uppercase">
          {movingTextPhrases.slice(0, 3).map((phrase, idx) => (
            <span key={idx} className="flex items-center gap-3">
              <span>{phrase}</span>
              {idx < 2 && (
                <span className="text-[var(--muted-foreground)]/50">·</span>
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
      className="border-b border-[var(--edge)] screen-line-bottom bg-[var(--muted)]/20 py-2.5 overflow-hidden select-none"
      aria-label="Status ticker"
    >
      <div className="flex w-max animate-marquee items-center font-mono text-[11px] tracking-[0.15em] uppercase text-[var(--muted-foreground)]">
        {tickerItems.map((phrase, idx) => (
          <span key={idx} className="flex items-center shrink-0">
            <span className="px-4 hover:text-[var(--foreground)] transition-colors">
              {phrase}
            </span>
            <span className="text-[var(--muted-foreground)]/40 select-none">
              ×
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
