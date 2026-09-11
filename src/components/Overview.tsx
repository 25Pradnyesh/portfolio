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
import { PixelPSLogo } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

const rollingPhrases = [
  "Building AI products & full-stack systems",
  "Experimenting with AI agents",
  "Shipping products from zero to one",
  "Turning ideas into working software",
  "Building AI-powered products",
  "Exploring AI × software × product",
];

function VerticalRollingTagline() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rollingPhrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <p className="font-sans text-xs sm:text-[13px] text-zinc-400 mt-1.5 sm:mt-2 leading-normal">
        {rollingPhrases[0]}
      </p>
    );
  }

  return (
    <div className="relative h-5 sm:h-5.5 overflow-hidden mt-1.5 sm:mt-2 select-none">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-[13px] text-zinc-400 leading-normal truncate"
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
      {/* 1. HERO / GRID AREA - Subtle Dotted Field, Centered Bold Pixel "PS" */}
      <div className="select-none h-44 sm:h-52 border-x border-edge flex items-center justify-center text-[var(--foreground)] screen-line-before before:-top-px dot-grid relative">
        <div className="relative inline-block">
          <PixelPSLogo className="h-16 w-auto sm:h-18 text-white" />
        </div>
      </div>

      {/* 2. PROFILE ROW - Seamless Editorial Layout, 50% Overlapping Avatar */}
      <div className="flex border-x border-b border-edge bg-[var(--background)]">
        {/* Left Column: Avatar container */}
        <div className="shrink-0 border-r border-edge flex items-center justify-center px-4 sm:px-6 py-4">
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

        {/* Right Column: Unified continuous editorial composition */}
        <div className="flex flex-1 flex-col justify-center px-4 py-4 sm:px-6 sm:py-5 min-w-0">
          <div className="font-mono text-[11px] sm:text-xs text-zinc-500 tracking-tight select-none">
            AI Engineer &amp; Full-Stack Developer
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-1 sm:mt-1.5">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              {personal.name}
            </h1>
            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-mono text-emerald-400 select-none">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available / Building
            </span>
          </div>
          {/* Vertical Rolling Tagline: Exactly in place of static bio */}
          <VerticalRollingTagline />
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
