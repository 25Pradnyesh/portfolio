"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  CodeXml,
  MapPin,
  GraduationCap,
  Clock,
  Sparkles,
  Mail,
  Calendar,
} from "lucide-react";
import { PixelPSLogo } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Overview() {
  const { personal } = portfolioData;
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* 1. HERO / GRID AREA - Subtle Dotted Field, Centered Bold Pixel "PS" */}
      <div className="select-none h-44 sm:h-52 border-x border-edge flex items-center justify-center text-[var(--foreground)] screen-line-before before:-top-px dot-grid relative">
        <div className="relative inline-block">
          <PixelPSLogo className="h-16 w-auto sm:h-18 text-white" />
        </div>
      </div>

      {/* 2. PROFILE ROW - Snug Editorial Layout, 50% Overlapping Avatar */}
      <div className="flex border-x border-b border-edge bg-[var(--background)]">
        {/* Left Column: Snug container hugging the Avatar */}
        <div className="shrink-0 border-r border-edge flex items-center justify-center px-4 sm:px-6 py-2">
          <div className="size-28 sm:size-34 rounded-full ring-1 ring-zinc-800 ring-offset-2 ring-offset-zinc-950 relative -mt-14 sm:-mt-17 z-10 overflow-hidden select-none bg-[var(--background)] shadow-sm">
            <Image
              src={personal.profileImage}
              alt={personal.name}
              width={140}
              height={140}
              className="size-full rounded-full object-cover pfp-image"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Right Column: Close-alignment 3-tier Editorial Details */}
        <div className="flex flex-1 flex-col justify-between min-w-0">
          {/* Top tier: Technical role indicator */}
          <div className="flex items-end pb-1.5 pt-2 pl-4 sm:pl-5 pr-4">
            <div className="line-clamp-1 font-mono text-[11px] sm:text-xs text-zinc-500 select-none">
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Middle tier: Name + Subtle Green Status Indicator */}
          <div className="border-t border-edge">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 py-1.5 pl-4 sm:pl-5 pr-4">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
                {personal.name}
              </h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 select-none">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available / Building
              </span>
            </div>

            {/* Bottom tier: Bio statement (Clean Sans-serif) */}
            <div className="border-t border-edge py-2 pl-4 sm:pl-5 pr-4">
              <p className="font-sans text-xs sm:text-[13px] text-zinc-400 leading-normal">
                {personal.bio}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. INFORMATION AREA - Compact Structured 2-Column Metadata Grid */}
      <section
        data-slot="panel"
        className="screen-line-before border-x border-edge"
      >
        <h2 className="sr-only">Overview &amp; Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-edge">
          {/* LEFT COLUMN: 7 cols (~58% width) with vertical right border */}
          <div className="md:col-span-7 p-4 sm:p-5 md:border-r border-edge space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <CodeXml className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                AI Engineer &amp; Full-Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <MapPin className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                {personal.location}
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <GraduationCap className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                Savitribai Phule Pune University
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: 5 cols (~42% width) */}
          <div className="md:col-span-5 p-4 sm:p-5 border-t md:border-t-0 border-edge space-y-2.5 sm:space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Clock className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                <span>{currentTime || "--:--"}</span>
                <span className="text-zinc-500">{" // IST"}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Sparkles className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                Currently building
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Mail className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-zinc-200 hover:text-white truncate transition-colors"
                title={personal.email}
              >
                {personal.email}
              </a>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Calendar className="size-3.5 sm:size-4" strokeWidth={1.5} />
              </div>
              <a
                href={personal.socials.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-200 hover:text-white transition-colors"
              >
                cal.com/pradnyesh
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
