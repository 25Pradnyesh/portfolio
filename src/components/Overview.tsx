"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
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

const rollingPhrases = [
  "Turning ideas into working software",
  "Building AI products",
  "Full-stack systems",
  "Experimenting with AI agents",
  "Shipping from zero to one",
];

function VerticalRollingTagline() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rollingPhrases.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="font-sans text-xs sm:text-[13px] md:text-sm text-zinc-400 mt-1 sm:mt-1.5 leading-normal">
        {rollingPhrases[0]}
      </p>
    );
  }

  return (
    <div className="relative h-5 sm:h-5.5 overflow-hidden mt-1 sm:mt-1.5 select-none">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-[13px] md:text-sm text-zinc-400 leading-normal truncate"
        >
          {rollingPhrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

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

      {/* 2. PROFILE ROW - Dedicated Left PFP Column & 3-Tier Right Content Column with Internal Horizontal Dividers */}
      <div className="screen-line-before grid grid-cols-1 sm:grid-cols-[200px_1fr] md:grid-cols-[220px_1fr] border-x border-b border-edge bg-[var(--background)]">
        {/* Left Column: Dedicated PFP Column */}
        <div className="border-b sm:border-b-0 sm:border-r border-edge flex items-center justify-center p-5 sm:p-6 relative">
          <div className="size-32 sm:size-36 md:size-[144px] rounded-full border border-zinc-800 bg-zinc-950 relative -mt-6 sm:-mt-8 md:-mt-9 z-10 overflow-hidden select-none ring-1 ring-white/5 shadow-sm shrink-0">
            <Image
              src={personal.profileImage}
              alt="Pradnyesh"
              width={160}
              height={160}
              className="size-full rounded-full object-cover pfp-image"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Right Column: 3-Tier Identity Column with internal horizontal dividers */}
        <div className="flex flex-col justify-between min-w-0">
          {/* Tier 1: Role / Eyebrow */}
          <div className="px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 border-b border-edge flex items-center">
            <div className="font-mono text-xs sm:text-[13px] text-zinc-500 tracking-normal select-none">
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Tier 2: Dominant Name + Verified Badge + Status */}
          <div className="px-5 sm:px-6 md:px-7 py-3.5 sm:py-4.5 border-b border-edge flex items-center">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight text-zinc-50 flex items-center gap-2">
                <span>Pradnyesh</span>
                <VerifiedBadge className="size-4.5 sm:size-5 text-[#1D9BF0] shrink-0 inline-block align-middle" />
              </h1>
              <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono font-medium text-emerald-400 select-none tracking-wider ml-1 sm:ml-1.5">
                <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                BUILDING
              </span>
            </div>
          </div>

          {/* Tier 3: Vertically Rolling Descriptor */}
          <div className="px-5 sm:px-6 md:px-7 py-3 sm:py-3.5 flex items-center min-w-0 w-full">
            <VerticalRollingTagline />
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
