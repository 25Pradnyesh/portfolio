"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, CalIcon, ResumeIcon } from "@/components/Icons";
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
    <section className="screen-line-bottom">
      {/* Profile Row */}
      <div className="flex items-start gap-4 sm:gap-5 px-5 pt-8 pb-6">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="size-16 sm:size-20 rounded-full overflow-hidden border border-[var(--edge)]">
            <Image
              src={personal.profileImage}
              alt={personal.name}
              width={80}
              height={80}
              className="object-cover object-center size-full pfp-image"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Identity */}
        <div className="flex-1 min-w-0 pt-0.5">
          <h1 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)] leading-tight">
            {personal.name}
          </h1>
          <p className="font-mono text-xs text-[var(--muted-foreground)] mt-0.5 tracking-wide">
            {personal.title}
          </p>
          <p className="text-[13px] text-[var(--muted-foreground)] mt-2.5 leading-relaxed max-w-sm">
            &ldquo;{personal.bio}&rdquo;
          </p>
        </div>
      </div>

      {/* Compact metadata row */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 pb-4 font-mono text-[11px] text-[var(--muted-foreground)]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-3 shrink-0" />
          {personal.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="size-3 shrink-0" />
          {currentTime || "--:--"} IST
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-emerald-500">{personal.status}</span>
        </span>
      </div>

      {/* Quick links row */}
      <div className="flex items-center gap-1 px-5 pb-5 flex-wrap">
        <a
          href={personal.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="GitHub"
        >
          <GithubIcon className="size-3" />
          GitHub
        </a>
        <a
          href={personal.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="LinkedIn"
        >
          <LinkedinIcon className="size-3" />
          LinkedIn
        </a>
        <a
          href={personal.socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="X"
        >
          <XIcon className="size-2.5" />
          X
        </a>
        <a
          href={personal.socials.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="Cal.com"
        >
          <CalIcon className="size-3" />
          Cal.com
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="Email"
        >
          <Mail className="size-3" />
          Email
        </a>
        <a
          href={personal.socials.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono text-[var(--muted-foreground)] hover:text-[var(--foreground)] border border-[var(--edge)] hover:border-[var(--muted-foreground)]/50 transition-all rounded-sm"
          title="Resume"
        >
          <ResumeIcon className="size-3" />
          Resume
          <ArrowUpRight className="size-2.5" />
        </a>
      </div>
    </section>
  );
}
