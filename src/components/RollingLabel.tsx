"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

const ROLLING_LABELS = [
  "Product Engineer",
  "AI Engineer",
  "Full-Stack Developer",
  "Generative AI Builder",
  "Hackathon Builder",
  "AI Systems Developer",
  "Experimental Product Builder",
] as const;

// Duplicate the first item at the end for an invisible, seamless infinite loop
const TRACK_LABELS = [...ROLLING_LABELS, ROLLING_LABELS[0]];

export default function RollingLabel() {
  const shouldReduceMotion = useReducedMotion();
  const isMounted = useIsMounted();
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Timer loop controlling visible hold (~1000ms) and vertical transition (~450ms)
  useEffect(() => {
    if (!isMounted || shouldReduceMotion) return;

    let timer: NodeJS.Timeout;
    let resetTimer: NodeJS.Timeout;
    let reenableTimer: NodeJS.Timeout;

    if (index === TRACK_LABELS.length - 1) {
      // Reached the duplicate "Product Engineer" (index 7).
      // The CSS transition from index 6 to 7 takes 450ms.
      // Once it finishes arriving, instantly snap to index 0 without transition.
      resetTimer = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);

        // Re-enable transition after the snap has been rendered
        reenableTimer = setTimeout(() => {
          setIsTransitioning(true);
        }, 50);
      }, 450);
    } else {
      // For index 0: hold for 1000ms.
      // For indices 1 through 6: 450ms transition + 1000ms hold = 1450ms total cycle.
      const holdTime = index === 0 ? 1000 : 1450;
      timer = setTimeout(() => {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
      }, holdTime);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
      clearTimeout(reenableTimer);
    };
  }, [index, isMounted, shouldReduceMotion]);

  // Ensure transitions are restored if user returns from another tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsTransitioning(true);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  // Accessibility & SSR fallback: Render static first label
  if (!isMounted || shouldReduceMotion) {
    return (
      <div className="relative h-5 overflow-hidden w-full min-w-0 select-none flex items-center">
        <span className="font-sans text-xs sm:text-[13px] text-zinc-400 select-none leading-normal truncate">
          Product Engineer
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative h-5 overflow-hidden w-full min-w-0 select-none"
      aria-label="Engineering roles ticker"
    >
      <div
        className="flex flex-col w-full will-change-transform"
        style={{
          transform: `translateY(-${(index * 100) / TRACK_LABELS.length}%)`,
          transition: isTransitioning
            ? "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)"
            : "none",
        }}
      >
        {TRACK_LABELS.map((label, idx) => (
          <div
            key={`${label}-${idx}`}
            className="h-5 flex items-center font-sans text-xs sm:text-[13px] text-zinc-400 select-none leading-normal truncate whitespace-nowrap"
          >
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
