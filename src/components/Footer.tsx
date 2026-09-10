"use client";

import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon, CalIcon } from "@/components/Icons";

export default function Footer() {
  const { footer, personal } = portfolioData;

  return (
    <footer
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge py-8 px-4"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="text-sm font-medium text-[var(--foreground)]">
            {footer.name}
          </div>
          <p className="font-mono text-xs text-[var(--muted-foreground)]">
            AI Engineer & Full-Stack Developer · {personal.location}
          </p>
          <p className="font-mono text-[10px] text-[var(--muted-foreground)]/60 pt-1">
            © {footer.year} · Built with Next.js & Tailwind CSS
          </p>
        </div>

        {/* Social Link Icons */}
        <div className="flex items-center gap-2">
          <a
            href={personal.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-md border border-edge text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="X"
          >
            <XIcon className="size-3.5" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-md border border-edge text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-md border border-edge text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href={personal.socials.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-8 items-center justify-center rounded-md border border-edge text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
            aria-label="Cal.com"
          >
            <CalIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
