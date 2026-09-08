"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function SocialLinks() {
  const { personal } = portfolioData;

  const links = [
    {
      name: "GitHub",
      url: personal.socials.github,
      handle: "@25Pradnyesh",
      icon: <GithubIcon className="size-4" />,
    },
    {
      name: "LinkedIn",
      url: personal.socials.linkedin,
      handle: "in/pradnyesh-s",
      icon: <LinkedinIcon className="size-4" />,
    },
    {
      name: "X",
      url: personal.socials.x,
      handle: "@Pradnyesh_25",
      icon: <XIcon className="size-3.5" />,
    },
    {
      name: "Email",
      url: `mailto:${personal.email}`,
      handle: personal.email,
      icon: <Mail className="size-4" />,
    },
  ];

  return (
    <section className="border-x border-b border-edge">
      <h2 className="sr-only">Social Links</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-edge">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target={link.name === "Email" ? undefined : "_blank"}
            rel={link.name === "Email" ? undefined : "noopener noreferrer"}
            className="group flex items-center justify-between p-4 hover:bg-[var(--muted)] transition-colors duration-150"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors shrink-0">
                {link.icon}
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
