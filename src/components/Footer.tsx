"use client"

import { portfolioData } from "@/data/portfolio"

import {
  CalIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "@/components/portfolio-icons"

export default function Footer() {
  const { footer, personal } = portfolioData

  return (
    <footer
      data-slot="panel"
      className="screen-line-before screen-line-after border-edge border-x px-4 py-8"
    >
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="text-sm font-medium text-[var(--foreground)]">
            {footer.name}
          </div>
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            AI Engineer & Full-Stack Developer · {personal.location}
          </p>
          <p className="pt-1 font-mono text-[10px] text-[var(--muted-foreground)]/60">
            © {footer.year} · Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* Social Link Icons */}
        <div className="flex items-center gap-2">
          <a
            href={personal.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge flex size-8 items-center justify-center rounded-md border text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="X"
          >
            <XIcon className="size-3.5" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge flex size-8 items-center justify-center rounded-md border text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge flex size-8 items-center justify-center rounded-md border text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={personal.socials.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge flex size-8 items-center justify-center rounded-md border text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
            aria-label="Cal.com"
          >
            <CalIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
