"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { CalIcon, ResumeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact } = portfolioData;

  return (
    <section
      id="contact"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3">
        <h2 className="section-heading">Contact</h2>
      </div>

      {/* Content */}
      <div className="border-b border-edge px-4 py-8 space-y-4">
        <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-[var(--foreground)]">
          {contact.headline}
        </h3>
        <p className="text-sm text-[var(--muted-foreground)] max-w-md leading-relaxed">
          {contact.prompt}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 rounded-md transition-opacity"
          >
            <Mail className="size-3.5" />
            Email me
            <ArrowUpRight className="size-3" />
          </a>

          <a
            href={contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono border border-edge bg-[var(--muted)]/40 text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md transition-colors"
          >
            <CalIcon className="size-3.5" />
            Book a meeting
            <ArrowUpRight className="size-3 opacity-60" />
          </a>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono border border-edge bg-[var(--muted)]/40 text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md transition-colors"
          >
            <ResumeIcon className="size-3.5" />
            View Resume
            <ArrowUpRight className="size-3 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
}
