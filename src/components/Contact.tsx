"use client";

import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Download,
  Calendar,
  Clock,
  FileText,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  CalIcon,
  ResumeIcon,
} from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact, socialLinks } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon className="size-3.5" />;
      case "linkedin":
        return <LinkedinIcon className="size-3.5" />;
      case "x":
        return <XIcon className="size-3" />;
      case "cal.com":
        return <CalIcon className="size-3.5" />;
      case "resume":
        return <ResumeIcon className="size-3.5" />;
      case "email":
      default:
        return <Mail className="size-3.5" />;
    }
  };

  return (
    <section id="contact" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Contact
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / connect
        </span>
      </div>

      {/* Body */}
      <div className="p-4 sm:p-5 space-y-6">
        {/* Editorial Headline */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--foreground)] uppercase leading-tight">
            LET&apos;S BUILD
            <br />
            SOMETHING.
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mt-2 max-w-lg">
            {contact.prompt}
          </p>
        </div>

        {/* Primary Action Buttons (Email, Cal.com, Resume view/download) */}
        <div className="flex flex-wrap gap-2.5 font-mono text-xs">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity"
          >
            <Mail className="size-3.5" />
            <span>Email me →</span>
          </a>

          <a
            href={contact.calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-edge bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--edge)] transition-colors"
          >
            <Calendar className="size-3.5" />
            <span>Book a meeting →</span>
          </a>

          <a
            href={contact.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-edge hover:bg-[var(--muted)] text-[var(--foreground)] transition-colors"
          >
            <FileText className="size-3.5" />
            <span>Resume →</span>
          </a>

          <a
            href={contact.resumeUrl}
            download="Pradnyesh_Resume.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded border border-edge hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <Download className="size-3.5" />
            <span>Download Resume ↓</span>
          </a>
        </div>

        {/* Meeting Quick Options */}
        <div className="p-3.5 rounded border border-edge bg-[var(--muted)]/40 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted-foreground)]">
            <Clock className="size-3.5 text-emerald-400" />
            <span>Schedule direct discussion via Cal.com:</span>
          </div>

          <div className="flex flex-wrap gap-3 font-mono text-xs">
            <a
              href={contact.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--foreground)] hover:underline underline-offset-4"
            >
              <span>15 min meeting →</span>
            </a>
            <span className="text-[var(--muted-foreground)] select-none">·</span>
            <a
              href={contact.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--foreground)] hover:underline underline-offset-4"
            >
              <span>30 min meeting →</span>
            </a>
          </div>
        </div>

        {/* Direct Email block with Copy */}
        <div className="p-3.5 rounded border border-edge bg-[var(--muted)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="size-3.5 text-[var(--muted-foreground)] shrink-0" />
            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--foreground)] hover:underline underline-offset-4 truncate"
            >
              {personal.email}
            </a>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-edge hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="size-3 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="size-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social / Direct Channels Grid */}
        <div className="pt-2">
          <span className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider block mb-2.5">
            Channels
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {socialLinks.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target={channel.type === "email" ? undefined : "_blank"}
                rel={channel.type === "email" ? undefined : "noopener noreferrer"}
                download={channel.name === "Resume" ? undefined : undefined}
                className="group flex items-center justify-between p-2.5 rounded border border-edge hover:bg-[var(--muted)] transition-colors"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <div className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors shrink-0">
                    {getSocialIcon(channel.name)}
                  </div>
                  <span className="font-mono text-xs text-[var(--foreground)] font-medium truncate">
                    {channel.name}
                  </span>
                </div>
                <ArrowUpRight className="size-3 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
