"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  CalIcon,
  ResumeIcon,
} from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function SocialLinks() {
  const { socialLinks } = portfolioData;

  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "github":
        return <GithubIcon className="size-4" />;
      case "linkedin":
        return <LinkedinIcon className="size-4" />;
      case "x":
        return <XIcon className="size-3.5" />;
      case "cal.com":
        return <CalIcon className="size-4" />;
      case "resume":
        return <ResumeIcon className="size-4" />;
      case "email":
      default:
        return <Mail className="size-4" />;
    }
  };

  return (
    <section className="border-x border-b border-edge">
      <h2 className="sr-only">Social &amp; Contact Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 divide-edge">
        {socialLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.url}
            target={link.type === "email" ? undefined : "_blank"}
            rel={link.type === "email" ? undefined : "noopener noreferrer"}
            className={`group flex items-center justify-between p-3.5 sm:p-4 hover:bg-[var(--muted)] transition-colors duration-150 ${
              idx % 2 !== 0 ? "" : "border-r border-edge"
            } sm:border-r ${idx === 2 || idx === 5 ? "sm:border-r-0 lg:border-r" : ""} ${
              idx === 5 ? "lg:border-r-0" : ""
            } ${idx >= 3 ? "sm:border-t lg:border-t-0" : ""}`}
            title={link.name}
          >
            <div className="flex items-center gap-2 min-w-0">
              <div className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors shrink-0">
                {getIcon(link.name)}
              </div>
              <span className="font-mono text-xs font-medium text-[var(--foreground)] truncate">
                {link.name}
              </span>
            </div>
            <ArrowUpRight className="size-3.5 text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>
        ))}
      </div>
    </section>
  );
}
