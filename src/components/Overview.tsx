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

      {/* 2. PROFILE ROW - Proportional Left PFP Column & Vertically Centered 3-Row Text Structure */}
      <div className="screen-line-before grid grid-cols-1 sm:grid-cols-[160px_1fr] md:grid-cols-[170px_1fr] border-x border-b border-edge bg-[var(--background)]">
        {/* Left Column: Large, prominently centered PFP filling the cell */}
        <div className="border-b sm:border-b-0 sm:border-r border-edge flex items-center justify-center p-3 sm:p-3.5 relative">
          <div className="size-28 sm:size-32 md:size-[136px] rounded-full border border-zinc-800 bg-zinc-950 relative -mt-5 sm:-mt-6 z-10 overflow-hidden select-none ring-1 ring-white/5 shadow-sm shrink-0">
            <Image
              src={personal.profileImage}
              alt="Pradnyesh"
              width={140}
              height={140}
              className="size-full rounded-full object-cover pfp-image"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Right Column: 3-Row Identity Structure with internal horizontal grid dividers */}
        <div className="flex flex-col justify-between min-w-0">
          {/* Row 1: Role / Eyebrow */}
          <div className="px-5 sm:px-6 py-2.5 sm:py-3 border-b border-edge flex items-center">
            <div className="font-mono text-xs sm:text-[13px] text-zinc-500 tracking-normal select-none">
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Row 2: Dominant Name + Verified Badge + Status */}
          <div className="px-5 sm:px-6 py-3 sm:py-3.5 border-b border-edge flex items-center">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <h1 className="text-xl sm:text-2xl md:text-[26px] font-semibold tracking-tight text-zinc-50 flex items-center gap-2">
                <span>Pradnyesh</span>
                <VerifiedBadge className="size-4 sm:size-4.5 text-[#1D9BF0] shrink-0 inline-block align-middle" />
              </h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium text-emerald-400 select-none tracking-wider ml-1 sm:ml-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                BUILDING
              </span>
            </div>
          </div>

          {/* Row 3: Tagline */}
          <div className="px-5 sm:px-6 py-2.5 sm:py-3 flex items-center min-w-0">
            <p className="font-sans text-xs sm:text-[13px] text-zinc-400 select-none leading-normal truncate">
              Turning ideas into working software
            </p>
          </div>
        </div>
      </div>

      {/* 3. INFORMATION / METADATA AREA - 2-Column Monospace Technical Overview */}
      <section
        data-slot="panel"
        className="screen-line-before border-x border-edge"
      >
        <h2 className="sr-only">Overview &amp; Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-edge">
          {/* LEFT COLUMN */}
          <div className="p-4 sm:p-5 md:border-r border-edge space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <CodeXml className="size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                AI Engineer &amp; Full-Stack Developer
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Sparkles className="size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                Currently building
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <MapPin className="size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                Mumbai · Pune, India
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <GraduationCap className="size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                Savitribai Phule Pune University
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="p-4 sm:p-5 border-t md:border-t-0 border-edge space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Clock className="size-4" strokeWidth={1.5} />
              </div>
              <p className="text-zinc-200">
                <span>{currentTime || "--:--"}</span>
                <span className="text-zinc-500">{" // IST"}</span>
              </p>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-7 shrink-0 items-center justify-center rounded-md border border-edge bg-zinc-900/80 text-zinc-400">
                <Mail className="size-4" strokeWidth={1.5} />
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
                <Calendar className="size-4" strokeWidth={1.5} />
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
