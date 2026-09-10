"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { CalIcon, ResumeIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact } = portfolioData;

  return (
    <section id="contact" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom">
        <span className="section-heading">Contact</span>
      </div>

      {/* Content */}
      <div className="px-5 py-8 border-b border-[var(--edge)]">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          {contact.headline}
        </h2>
        <p className="text-[13px] text-[var(--muted-foreground)] mt-2 max-w-sm leading-relaxed">
          {contact.prompt}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-2 mt-5">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-mono bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity rounded-sm"
          >
            <Mail className="size-3" />
            Email me
            <ArrowUpRight className="size-3" />
          </a>

          <a
            href={contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-mono border border-[var(--edge)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors rounded-sm"
          >
            <CalIcon className="size-3" />
            Book a meeting
          </a>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-[12px] font-mono border border-[var(--edge)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors rounded-sm"
          >
            <ResumeIcon className="size-3" />
            Resume
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
