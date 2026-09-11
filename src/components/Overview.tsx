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
import { PixelPSLogo, VerifiedBadge } from "@/components/Icons";
import RollingLabel from "@/components/RollingLabel";
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
      {/* 1. HERO / GRID AREA - Dot Grid, Centered Restrained Pixel "PS" Mark */}
      <div className="select-none h-44 sm:h-52 border-x border-edge flex items-center justify-center text-[var(--foreground)] screen-line-before before:-top-px dot-grid relative">
        <div className="relative inline-block opacity-95">
          <PixelPSLogo className="h-14 w-auto sm:h-16 text-white" />
        </div>
      </div>

      {/* 2. PROFILE ROW - Proportional Left PFP Column & Compact 3-Row Identity Block */}
      <div className="screen-line-before grid grid-cols-1 sm:grid-cols-[135px_1fr] md:grid-cols-[145px_1fr] border-x border-b border-edge bg-[var(--background)]">
        {/* Left Column: Narrow column with large PFP occupying most of the cell */}
        <div className="border-b sm:border-b-0 sm:border-r border-edge flex items-center justify-center p-2 sm:p-2.5">
          <div className="size-24 sm:size-[114px] md:size-[122px] rounded-full border border-zinc-800 bg-zinc-950 overflow-hidden select-none ring-1 ring-white/5 shadow-sm shrink-0">
            <Image
              src={personal.profileImage}
              alt="Pradnyesh"
              width={130}
              height={130}
              className="size-full rounded-full object-cover pfp-image"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Right Column: Compact 3-Row Identity Block with internal structural grid dividers */}
        <div className="flex flex-col justify-between min-w-0">
          {/* Row 1: Role / Eyebrow (smallest / muted) */}
          <div className="px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 border-b border-edge flex items-center">
            <div className="font-mono text-xs sm:text-[13px] text-zinc-500 tracking-normal select-none">
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Row 2: Dominant Name + Verified Badge + Status */}
          <div className="px-3.5 sm:px-4 md:px-5 py-2.5 sm:py-3 border-b border-edge flex items-center">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <h1 className="text-2xl sm:text-3xl md:text-[30px] font-bold tracking-tight text-white flex items-center gap-2">
                <span>Pradnyesh</span>
                <VerifiedBadge className="size-4.5 sm:size-5 text-[#1D9BF0] shrink-0 inline-block align-middle" />
              </h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium text-emerald-400 select-none tracking-wider ml-1 sm:ml-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                BUILDING
              </span>
            </div>
          </div>

          {/* Row 3: Tagline (secondary) */}
          <div className="px-3.5 sm:px-4 md:px-5 py-2 sm:py-2.5 flex items-center min-w-0">
            <RollingLabel />
          </div>
        </div>
      </div>

      {/* 3. INFORMATION / METADATA AREA - Unified Technical Profile Panel */}
      <section
        data-slot="panel"
        className="screen-line-before border-x border-b border-edge bg-[var(--background)] px-5 sm:px-6 py-3 sm:py-3.5"
      >
        <h2 className="sr-only">Overview &amp; Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-2 sm:gap-y-2.5">
          {/* COLUMN 1 */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <CodeXml className="size-3.5" strokeWidth={1.5} />
              </div>
              <span className="text-zinc-300 truncate">
                AI Engineer &amp; Full-Stack Developer
              </span>
            </div>

            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <Sparkles className="size-3.5" strokeWidth={1.5} />
              </div>
              <span className="text-zinc-300 truncate">
                Currently building
              </span>
            </div>

            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <MapPin className="size-3.5" strokeWidth={1.5} />
              </div>
              <span className="text-zinc-300 truncate">
                Mumbai · Pune, India
              </span>
            </div>

            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <GraduationCap className="size-3.5" strokeWidth={1.5} />
              </div>
              <span className="text-zinc-300 truncate">
                Savitribai Phule Pune University
              </span>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <Clock className="size-3.5" strokeWidth={1.5} />
              </div>
              <span className="text-zinc-300 truncate">
                <span>{currentTime || "--:--"}</span>
                <span className="text-zinc-600 ml-1">{"// IST"}</span>
              </span>
            </div>

            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <Mail className="size-3.5" strokeWidth={1.5} />
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-zinc-300 hover:text-white truncate transition-colors"
                title={personal.email}
              >
                {personal.email}
              </a>
            </div>

            <div className="h-6 flex items-center gap-3 font-mono text-xs sm:text-[13px] min-w-0">
              <div className="flex size-5 shrink-0 items-center justify-center rounded-[4px] border border-zinc-800/70 bg-zinc-900/50 text-zinc-400">
                <Calendar className="size-3.5" strokeWidth={1.5} />
              </div>
              <a
                href={personal.socials.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-300 hover:text-white truncate transition-colors"
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
