"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Contact() {
  const { personal, contact } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialChannels = [
    {
      name: "GitHub",
      url: personal.socials.github,
      handle: "@25Pradnyesh",
      icon: <GithubIcon className="size-3.5" />,
    },
    {
      name: "LinkedIn",
      url: personal.socials.linkedin,
      handle: "in/pradnyesh-s",
      icon: <LinkedinIcon className="size-3.5" />,
    },
    {
      name: "X",
      url: personal.socials.x,
      handle: "@Pradnyesh_25",
      icon: <XIcon className="size-3" />,
    },
  ];

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
      <div className="p-4 sm:p-5 space-y-5">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--foreground)]">
            {contact.headline}
          </h3>
          <p className="text-sm text-[var(--muted-foreground)] mt-1 max-w-md">
            {contact.prompt}
          </p>
        </div>

        {/* Email action block */}
        <div className="p-3.5 sm:p-4 rounded border border-edge bg-[var(--muted)]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-sm">
          <div className="flex items-center gap-2.5">
            <Mail className="size-4 text-[var(--muted-foreground)] shrink-0" />
            <a
              href={`mailto:${personal.email}`}
              className="text-[var(--foreground)] hover:underline underline-offset-4 break-all"
            >
              {personal.email}
            </a>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs border border-edge hover:bg-[var(--muted)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
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

            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded text-xs bg-[var(--foreground)] text-[var(--background)] font-medium hover:opacity-90 transition-opacity"
            >
              <span>Send Mail</span>
              <ArrowUpRight className="size-3" />
            </a>
          </div>
        </div>

        {/* Social channels */}
        <div className="pt-2">
          <span className="font-mono text-xs text-[var(--muted-foreground)] uppercase tracking-wider block mb-2">
            Socials
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {socialChannels.map((channel) => (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded border border-edge hover:bg-[var(--muted)] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">
                    {channel.icon}
                  </div>
                  <span className="font-mono text-xs text-[var(--foreground)] font-medium">
                    {channel.name}
                  </span>
                </div>
                <ArrowUpRight className="size-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
