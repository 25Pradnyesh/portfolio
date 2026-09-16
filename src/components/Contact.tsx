"use client"

import { portfolioData } from "@/data/portfolio"
import { ArrowUpRight, Mail } from "lucide-react"

import { CalIcon, ResumeIcon } from "@/components/portfolio-icons"

export default function Contact() {
  const { personal, contact } = portfolioData

  return (
    <section
      id="contact"
      data-slot="panel"
      className="screen-line-before screen-line-after border-edge border-x before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-edge border-b px-4 py-3">
        <h2 className="section-heading">Contact</h2>
      </div>

      {/* Content */}
      <div className="border-edge space-y-4 border-b px-4 py-8">
        <h3 className="text-xl font-medium tracking-tight text-[var(--foreground)] sm:text-2xl">
          {contact.headline}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-[var(--muted-foreground)]">
          {contact.prompt}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-[var(--foreground)] px-4 py-2 font-mono text-xs font-medium text-[var(--background)] transition-opacity hover:opacity-90"
          >
            <Mail className="size-3.5" />
            Email me
            <ArrowUpRight className="size-3" />
          </a>

          <a
            href={contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge inline-flex items-center gap-2 rounded-md border bg-[var(--muted)]/40 px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
          >
            <CalIcon className="size-3.5" />
            Book a meeting
            <ArrowUpRight className="size-3 opacity-60" />
          </a>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-edge inline-flex items-center gap-2 rounded-md border bg-[var(--muted)]/40 px-4 py-2 font-mono text-xs text-[var(--foreground)] transition-colors hover:bg-[var(--muted)]"
          >
            <ResumeIcon className="size-3.5" />
            View Resume
            <ArrowUpRight className="size-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  )
}
