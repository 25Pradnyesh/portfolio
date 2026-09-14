import React from "react";
import Link from "next/link";

function GitHubIcon({ className = "size-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 max-w-screen overflow-x-clip bg-background px-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-(--header-height) items-center justify-between border-x border-border px-4 md:max-w-3xl">
        <Link
          href="#hero"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-foreground transition-colors hover:text-foreground/80"
          aria-label="Pradnyesh - Home"
        >
          <span className="flex size-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/20 animate-pulse" />
          <span className="font-mono text-xs tracking-wider uppercase text-muted-foreground group-hover:text-foreground">
            PRADNYESH
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-xs font-mono text-muted-foreground sm:gap-6">
          <Link
            href="#about"
            className="transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#stack"
            className="transition-colors hover:text-foreground"
          >
            Stack
          </Link>
          <Link
            href="#experience"
            className="transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="transition-colors hover:text-foreground"
          >
            Projects
          </Link>

          <div className="h-3 w-px bg-border max-sm:hidden" aria-hidden="true" />

          <a
            href="https://github.com/25Pradnyesh"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            aria-label="GitHub Profile"
          >
            <GitHubIcon className="size-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
