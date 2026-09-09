"use client";

import { useReducedMotion } from "framer-motion";

export default function MovingText() {
  const shouldReduceMotion = useReducedMotion();

  const items = [
    "BUILDING AI PRODUCTS",
    "SHIPPING FULL-STACK SYSTEMS",
    "EXPERIMENTING WITH NEW IDEAS",
    "BUILDING AI PRODUCTS",
  ];

  if (shouldReduceMotion) {
    return (
      <div className="border-x border-b border-edge bg-[var(--muted)]/40 px-4 py-2 overflow-hidden select-none">
        <div className="flex items-center justify-center gap-3 font-mono text-[11px] tracking-wider text-[var(--muted-foreground)] uppercase">
          {items.map((phrase, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-[var(--foreground)]">{phrase}</span>
              {idx < items.length - 1 && (
                <span className="text-emerald-500 text-xs">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Seamless marquee animation with double list
  const tickerItems = [...items, ...items, ...items];

  return (
    <div
      className="border-x border-b border-edge bg-[var(--muted)]/30 py-2 overflow-hidden select-none relative"
      aria-label="Status ticker"
    >
      <div className="flex w-max animate-marquee gap-6 font-mono text-[11px] tracking-widest uppercase text-[var(--muted-foreground)]">
        {tickerItems.map((phrase, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="text-[var(--foreground)] hover:text-emerald-400 transition-colors">
              {phrase}
            </span>
            <span className="text-emerald-500 font-bold select-none">→</span>
          </div>
        ))}
      </div>
    </div>
  );
}
