"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MapPin, Clock, Mail, Code2 } from "lucide-react";
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
    <div>
      {/* Dot Grid Banner */}
      <div className="h-28 sm:h-36 dot-grid border-b border-[var(--edge)] screen-line-top flex items-center justify-center">
        <div className="flex flex-col items-center gap-0.5 px-4 py-2 border border-[var(--edge)] bg-[var(--background)]/80 backdrop-blur-sm">
          <span className="font-mono text-3xl sm:text-4xl font-black tracking-tighter text-[var(--foreground)]">
            PS
          </span>
        </div>
      </div>

      {/* Profile Row: Avatar + Identity */}
      <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 border-b border-[var(--edge)] screen-line-bottom">
        {/* Profile Image - always full color */}
        <div className="shrink-0">
          <div className="size-20 sm:size-28 rounded-full overflow-hidden border-2 border-[var(--edge)]">
            <Image
              src={personal.profileImage}
              alt={personal.name}
              width={112}
              height={112}
              className="object-cover object-center size-full"
              style={{ filter: "none", opacity: 1 }}
              priority
            />
          </div>
        </div>

        {/* Identity Text */}
        <div className="flex-1 min-w-0 pt-1">
          <p className="font-mono text-xs text-[var(--muted-foreground)] mb-0.5">
            {personal.title}
          </p>
          <h1 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
            {personal.name}{" "}
            <span className="inline-flex items-center" title="Verified">
              <svg
                viewBox="0 0 22 22"
                className="size-4 sm:size-5 text-blue-500 fill-current inline-block"
                aria-label="Verified"
              >
                <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.853-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.69-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.636.433 1.221.878 1.69.47.446 1.055.752 1.69.883.635.13 1.294.083 1.902-.141.27.587.7 1.086 1.24 1.44.54.354 1.167.551 1.813.568.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.223 1.26.27 1.894.14.634-.132 1.22-.438 1.69-.884.445-.47.75-1.055.88-1.69.13-.634.085-1.29-.138-1.893.587-.274 1.084-.705 1.438-1.246.355-.54.552-1.17.57-1.817zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            </span>
          </h1>
          <p className="text-sm text-[var(--muted-foreground)] mt-1.5 leading-relaxed max-w-md">
            {personal.bio}
          </p>
        </div>
      </div>

      {/* Metadata Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[var(--edge)] screen-line-bottom">
        {/* Role */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b sm:border-b-0 sm:border-r border-[var(--edge)]">
          <Code2 className="size-4 text-[var(--muted-foreground)] shrink-0" />
          <span className="font-mono text-sm text-[var(--foreground)]">
            {personal.title}
          </span>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-sm text-emerald-400">
            {personal.status}
          </span>
        </div>
      </div>

      {/* Location / Time / Cal / Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[var(--edge)] screen-line-bottom">
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b sm:border-b-0 sm:border-r border-[var(--edge)]">
          <MapPin className="size-4 text-[var(--muted-foreground)] shrink-0" />
          <span className="font-mono text-sm text-[var(--muted-foreground)]">
            {personal.location}
          </span>
        </div>
        <div className="flex items-center gap-3 px-4 sm:px-5 py-3">
          <Clock className="size-4 text-[var(--muted-foreground)] shrink-0" />
          <span className="font-mono text-sm text-[var(--muted-foreground)]">
            {currentTime || "--:--"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[var(--edge)] screen-line-bottom">
        <a
          href={personal.socials.cal}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 sm:px-5 py-3 border-b sm:border-b-0 sm:border-r border-[var(--edge)] hover:bg-[var(--muted)] transition-colors group"
        >
          <svg viewBox="0 0 24 24" className="size-4 text-[var(--muted-foreground)] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          <span className="font-mono text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
            cal.com/pradnyesh
          </span>
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-3 px-4 sm:px-5 py-3 hover:bg-[var(--muted)] transition-colors group"
        >
          <Mail className="size-4 text-[var(--muted-foreground)] shrink-0" />
          <span className="font-mono text-sm text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors truncate">
            {personal.email}
          </span>
        </a>
      </div>
    </div>
  );
}
