"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  MapPin,
  Clock,
  Mail,
  Copy,
  Check,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Overview() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in IST (Indian Standard Time)
      const istTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setCurrentTime(`${istTime} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border-x border-edge">
      {/* 1. Top Cover Banner with Technical Dot Grid and Monogram */}
      <div className="aspect-[2.4/1] sm:aspect-[3.2/1] border-b border-edge dot-grid flex items-center justify-center relative overflow-hidden select-none">
        <div className="flex flex-col items-center justify-center gap-1.5 p-4 border border-edge bg-[var(--background)]/80 backdrop-blur-sm">
          <div className="font-mono text-xs tracking-widest text-[var(--muted-foreground)]">
            [ DEV.PROFILE ]
          </div>
          <div className="font-mono text-xl sm:text-2xl font-bold tracking-widest text-[var(--foreground)]">
            PRADNYESH.DEV
          </div>
        </div>
      </div>

      {/* 2. Profile Photo + Headline Row */}
      <div className="flex flex-col sm:flex-row border-b border-edge">
        {/* Editorial Portrait Column */}
        <div className="shrink-0 p-4 sm:p-5 border-b sm:border-b-0 sm:border-r border-edge flex items-center justify-center sm:justify-start">
          <div className="relative size-28 sm:size-36 border border-edge bg-neutral-900 overflow-hidden ring-1 ring-white/10">
            <Image
              src={personal.profileImage}
              alt={personal.name}
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover object-center"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Name, Title & Bio Column */}
        <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--foreground)] uppercase">
                {personal.name}
              </h1>
              <span title="Verified Profile">
                <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
              </span>
            </div>

            <p className="font-mono text-xs sm:text-sm text-[var(--muted-foreground)] uppercase tracking-wider mt-1">
              {personal.title}
            </p>
          </div>

          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-xl">
            &ldquo;{personal.bio}&rdquo;
          </p>
        </div>
      </div>

      {/* 3. Repeating Hatch Pattern Separator Bar */}
      <div className="h-6 w-full border-b border-edge hatch-pattern" />

      {/* 4. Metadata Rows Panel (Swiss Technical Dashboard items) */}
      <div className="p-4 sm:p-5 space-y-3 border-b border-edge text-sm font-mono">
        {/* Row 1: Role */}
        <div className="flex items-center gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-[var(--muted-foreground)]">
            <Code2 className="size-3.5" />
          </div>
          <span className="text-[var(--foreground)]">{personal.title}</span>
        </div>

        {/* Row 2: Status */}
        <div className="flex items-center gap-3">
          <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-medium">
              ● {personal.status}
            </span>
          </div>
        </div>

        {/* Row 3: Grid of Location & Local Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-[var(--muted-foreground)]">
              <MapPin className="size-3.5" />
            </div>
            <span className="text-[var(--muted-foreground)]">
              {personal.location}
            </span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-[var(--muted-foreground)]">
              <Clock className="size-3.5" />
            </div>
            <span className="text-[var(--muted-foreground)]">
              {currentTime || "Loading..."}
            </span>
          </div>
        </div>

        {/* Row 4: Email with Copy action */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-edge/60">
          <div className="flex items-center gap-3">
            <div className="flex size-6 shrink-0 items-center justify-center rounded border border-edge bg-[var(--muted)] text-[var(--muted-foreground)]">
              <Mail className="size-3.5" />
            </div>
            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--foreground)] hover:underline underline-offset-4 break-all"
            >
              {personal.email}
            </a>
          </div>

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs border border-edge hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="Copy email"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy className="size-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
