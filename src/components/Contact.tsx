"use client";

import { Mail, Calendar, FileText, ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact } = portfolioData;

  return (
    <section id="contact" className="screen-line-bottom">
      {/* Headline area */}
      <div className="px-4 sm:px-5 py-8 sm:py-10 border-b border-[var(--edge)] text-center">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--foreground)] uppercase">
          {contact.headline}
        </h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-2 max-w-md mx-auto">
          {contact.prompt}
        </p>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-6 font-mono text-sm">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="size-3.5" />
            Email me
            <ArrowRight className="size-3" />
          </a>

          <a
            href={contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--edge)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            <Calendar className="size-3.5" />
            Book a meeting
            <ArrowRight className="size-3" />
          </a>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-[var(--edge)] text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            <FileText className="size-3.5" />
            View Resume
            <ArrowRight className="size-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
