"use client";

import { ArrowUpRight } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  CalIcon,
  ResumeIcon,
} from "@/components/Icons";
import { Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function SocialLinks() {
  const { socialLinks } = portfolioData;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon className="size-5" />;
      case "linkedin":
        return <LinkedinIcon className="size-5" />;
      case "x":
        return <XIcon className="size-4" />;
      case "cal.com":
        return <CalIcon className="size-5" />;
      case "resume":
        return <ResumeIcon className="size-5" />;
      case "email":
      default:
        return <Mail className="size-5" />;
    }
  };

  return (
    <section className="screen-line-bottom">
      <h2 className="sr-only">Social & Contact Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {socialLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.url}
            target={link.type === "email" ? undefined : "_blank"}
            rel={link.type === "email" ? undefined : "noopener noreferrer"}
            className={`group flex items-center justify-between px-4 sm:px-5 py-3.5 hover:bg-[var(--muted)] transition-colors duration-150 border-b border-[var(--edge)] ${
              (idx + 1) % 3 !== 0 ? "sm:border-r" : ""
            } ${idx % 2 === 0 ? "border-r sm:border-r" : ""} ${
              (idx + 1) % 3 !== 0 && (idx + 1) % 2 !== 0
                ? ""
                : ""
            }`}
            title={link.name}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors shrink-0">
                {getIcon(link.name)}
              </div>
              <span className="text-sm font-medium text-[var(--foreground)] truncate">
                {link.name}
              </span>
            </div>
            <ArrowUpRight className="size-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
