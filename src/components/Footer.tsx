"use client";

import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";

export default function Footer() {
  const { footer, personal } = portfolioData;

  return (
    <footer className="py-6 px-5">
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] text-[var(--muted-foreground)]">
          © {footer.year}{" "}
          <span className="text-[var(--foreground)]">{footer.name}</span>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-1.5">
          <a
            href={personal.socials.x}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="X"
          >
            <XIcon className="size-3" />
          </a>
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="size-3.5" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
