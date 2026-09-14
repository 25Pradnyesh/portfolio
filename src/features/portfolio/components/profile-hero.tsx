import React from "react";
import Image from "next/image";
import { USER } from "../data/user";

export function ProfileHero() {
  return (
    <section
      id="hero"
      data-slot="hero"
      className="screen-line-bottom border-x border-border bg-background relative overflow-hidden"
    >
      <div className="flex flex-col sm:flex-row items-stretch">
        {/* Avatar block with technical border */}
        <div className="relative flex shrink-0 items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border bg-muted/20">
          <div className="relative">
            <div className="relative size-28 sm:size-32 overflow-hidden rounded-lg border border-border bg-muted shadow-inner">
              <Image
                src={USER.profileImage}
                alt={USER.name}
                fill
                priority
                sizes="128px"
                className="object-cover"
              />
            </div>
            {/* Status dot badge */}
            <div className="absolute -bottom-2 -right-2 flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-0.5 shadow-sm">
              <span className="size-1.5 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20 animate-pulse" />
              <span className="font-mono text-[10px] font-medium tracking-wider text-emerald-400">
                {USER.status}
              </span>
            </div>
          </div>
        </div>

        {/* Identity & Descriptor block */}
        <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground/70 tracking-wide">
                PROFILE / 01
              </span>
              <span className="font-mono text-xs text-muted-foreground/50 select-none">
                Fig. 1
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-foreground">
              {USER.name}
            </h1>

            <p className="text-base sm:text-lg font-normal text-muted-foreground">
              {USER.role}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-dashed border-border/80">
            <p className="text-xs sm:text-sm font-mono text-muted-foreground/90 leading-relaxed">
              {USER.statusDescriptor}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
