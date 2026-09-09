"use client";

import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";

export default function Footer() {
  const { footer, personal } = portfolioData;

  return (
    <footer className="py-6 px-4 sm:px-5 mb-8">
      <div className="text-center space-y-3">
        <p className="font-mono text-xs text-[var(--muted-foreground)]">
          Built by{" "}
          <span className="text-[var(--foreground)] underline underline-offset-4">
            {footer.name}
          </span>
          .
        </p>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-3">
          <a
            href={personal.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="X"
          >
            <XIcon className="size-3.5" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
