"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { portfolioData } from "@/data/portfolio"
import {
  Calendar,
  Clock,
  CodeXml,
  GraduationCap,
  Hammer,
  Mail,
  MapPin,
} from "lucide-react"

import { PixelPSLogo, VerifiedBadge } from "@/components/portfolio-icons"
import RollingLabel from "@/components/RollingLabel"

export default function Overview() {
  const { personal } = portfolioData
  const [currentTime, setCurrentTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istTime = now.toLocaleTimeString("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      })
      setCurrentTime(istTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full">
      {/* 1. HERO / GRID AREA - Dot Grid, Centered Restrained Pixel "PS" Mark */}
      <div className="border-edge screen-line-before relative flex h-44 items-center justify-center border-x dot-grid text-[var(--foreground)] select-none before:-top-px sm:h-52">
        <div className="relative inline-block opacity-95">
          <PixelPSLogo className="h-14 w-auto text-white sm:h-16" />
        </div>
      </div>

      {/* 2. PROFILE ROW - Proportional Left PFP Column & Compact 3-Row Identity Block */}
      <div className="screen-line-before border-edge grid grid-cols-1 border-x border-b bg-[var(--background)] sm:grid-cols-[135px_1fr] md:grid-cols-[145px_1fr]">
        {/* Left Column: Narrow column with large PFP occupying most of the cell */}
        <div className="border-edge flex items-center justify-center border-b p-2 sm:border-r sm:border-b-0 sm:p-2.5">
          <div className="size-24 shrink-0 overflow-hidden rounded-full border border-zinc-800 bg-zinc-950 shadow-sm ring-1 ring-white/5 select-none sm:size-[114px] md:size-[122px]">
            <Image
              src={personal.profileImage}
              alt="Pradnyesh"
              width={130}
              height={130}
              className="pfp-image size-full rounded-full object-cover"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Right Column: Compact 3-Row Identity Block with internal structural grid dividers */}
        <div className="flex min-w-0 flex-col justify-between">
          {/* Row 1: Role / Eyebrow (smallest / muted) */}
          <div className="border-edge flex items-center border-b px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5">
            <div className="font-mono text-xs tracking-normal text-zinc-500 select-none sm:text-[13px]">
              AI Engineer &amp; Full-Stack Developer
            </div>
          </div>

          {/* Row 2: Dominant Name + Verified Badge + Status */}
          <div className="border-edge flex items-center border-b px-3.5 py-2.5 sm:px-4 sm:py-3 md:px-5">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[30px]">
                <span>Pradnyesh</span>
                <VerifiedBadge className="inline-block size-4.5 shrink-0 align-middle text-[#1D9BF0] sm:size-5" />
              </h1>
              <span className="ml-1 inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-wider text-emerald-400 select-none sm:ml-1.5 sm:text-xs">
                <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                BUILDING
              </span>
            </div>
          </div>

          {/* Row 3: Tagline (secondary) */}
          <div className="flex min-w-0 items-center px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-5">
            <RollingLabel />
          </div>
        </div>
      </div>

      {/* 3. INFORMATION / METADATA AREA - Unified Technical Profile Panel */}
      <section
        data-slot="panel"
        className="screen-line-before border-edge border-x border-b bg-[var(--background)] px-5 py-3 sm:px-6 sm:py-3.5"
      >
        <h2 className="sr-only">Overview &amp; Details</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:gap-x-12 sm:gap-y-2.5 md:grid-cols-2">
          {/* COLUMN 1 */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <CodeXml className="size-3" strokeWidth={1.5} />
              </div>
              <span className="truncate font-medium text-zinc-200">
                AI Engineer &amp; Full-Stack Developer
              </span>
            </div>

            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <Hammer className="size-3" strokeWidth={1.5} />
              </div>
              <span className="truncate text-zinc-400">Currently building</span>
            </div>

            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <MapPin className="size-3" strokeWidth={1.5} />
              </div>
              <span className="truncate text-zinc-300">
                Mumbai · Pune, India
              </span>
            </div>

            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <GraduationCap className="size-3" strokeWidth={1.5} />
              </div>
              <span className="truncate text-zinc-400">
                Savitribai Phule Pune University
              </span>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="space-y-2 sm:space-y-2.5">
            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <Clock className="size-3" strokeWidth={1.5} />
              </div>
              <span className="truncate text-zinc-200">
                <span>{currentTime || "--:--"}</span>
                <span className="ml-1 text-zinc-600">{"// IST"}</span>
              </span>
            </div>

            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <Mail className="size-3" strokeWidth={1.5} />
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="truncate text-zinc-300 transition-colors hover:text-white"
                title={personal.email}
              >
                {personal.email}
              </a>
            </div>

            <div className="flex h-6 min-w-0 items-center gap-3 font-mono text-xs sm:text-[13px]">
              <div className="flex size-4 shrink-0 items-center justify-center rounded-[2px] bg-zinc-900/30 text-zinc-500">
                <Calendar className="size-3" strokeWidth={1.5} />
              </div>
              <a
                href={personal.socials.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="truncate text-zinc-300 transition-colors hover:text-white"
              >
                cal.com/pradnyesh
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
