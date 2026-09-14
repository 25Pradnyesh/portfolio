import React from "react";
import { cn } from "@/lib/utils";

export function Panel({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn(
        "screen-line-top screen-line-bottom border-x border-border bg-background relative",
        className
      )}
      {...props}
    />
  );
}

export function PanelHeader({
  className,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn(
        "screen-line-bottom px-4 py-3 sm:py-3.5 flex items-center justify-between bg-background z-10",
        className
      )}
      {...props}
    />
  );
}

export function PanelTitle({
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      data-slot="panel-title"
      className={cn(
        "font-heading text-2xl sm:text-3xl font-medium tracking-tight text-foreground",
        className
      )}
      {...props}
    />
  );
}

export function PanelTitleSup({
  className,
  ...props
}: React.ComponentProps<"sup">) {
  return (
    <sup
      className={cn(
        "top-[-0.75em] ml-1.5 font-mono text-xs font-normal text-muted-foreground/80 tracking-normal",
        className
      )}
      {...props}
    />
  );
}

export function PanelDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-description"
      className={cn("px-4 py-3 text-sm text-muted-foreground border-b border-border/60", className)}
      {...props}
    />
  );
}

export function PanelContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="panel-content"
      className={cn("p-4", className)}
      {...props}
    />
  );
}
