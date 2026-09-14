"use client";

import React, { useEffect, useState } from "react";
import { ClockIcon } from "lucide-react";

export function CurrentLocalTime({ timeZone = "Asia/Kolkata" }: { timeZone?: string }) {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    function update() {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setTimeString(`${formatted} IST`);
      } catch {
        setTimeString("IST (UTC+5:30)");
      }
    }

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
      <ClockIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
      <span className="font-mono text-xs tabular-nums text-foreground/90">
        {timeString || "Loading local time..."}
      </span>
    </div>
  );
}
