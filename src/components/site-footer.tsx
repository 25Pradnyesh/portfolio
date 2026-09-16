import Link from "next/link"

import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

export function SiteFooter() {
  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        {/* ROW 1: Compact Attribution */}
        <div className="screen-line-top flex min-h-[64px] items-center justify-center px-4 py-4 text-center font-mono text-xs text-muted-foreground sm:text-sm">
          <p className="leading-relaxed">
            Built by{" "}
            <a
              href={SOCIAL.x.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/90 link-underline transition-colors duration-150 hover:text-foreground"
            >
              Pradnyesh
            </a>
            . Inspired by / forked from{" "}
            <a
              href="https://chanhdai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/90 link-underline transition-colors duration-150 hover:text-foreground"
            >
              chanhdai.com
            </a>
            .
          </p>
        </div>

        {/* ROW 2: Compact Links & Brand Icons */}
        <div className="screen-line-bottom flex min-h-[50px] items-center justify-center border-t border-line screen-line-bottom-border px-4 py-3">
          <nav
            aria-label="Footer links"
            className="flex items-center gap-3.5 text-muted-foreground sm:gap-4.5"
          >
            <Link
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-muted-foreground transition-colors duration-150 hover:text-foreground sm:text-sm"
            >
              llms.txt
            </Link>

            <span className="h-3.5 w-px bg-line" aria-hidden />

            <a
              href={SOCIAL.x.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
              aria-label="X (formerly Twitter)"
            >
              <XIcon className="size-[18px]" />
            </a>

            <span className="h-3.5 w-px bg-line" aria-hidden />

            <a
              href={SOCIAL.github.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-[18px]" />
            </a>

            <span className="h-3.5 w-px bg-line" aria-hidden />

            <a
              href={SOCIAL.linkedin.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-150 hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="size-[18px]" />
            </a>
          </nav>
        </div>
      </div>

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}
