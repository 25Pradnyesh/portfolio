import React from "react";
import { cn } from "@/lib/utils";

export function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "stripe-divider h-(--separator-height) w-full border-x border-border",
        className
      )}
      aria-hidden="true"
    />
  );
}
