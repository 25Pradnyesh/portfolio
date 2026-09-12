"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
  BrandXIcon,
  BrandGithubIcon,
  BrandLinkedinIcon,
  BrandCalIcon,
  BrandTelegramIcon,
  BrandResumeIcon,
  BrandDiscordIcon,
  BrandEmailIcon,
} from "@/components/Icons";

interface SocialItemConfig {
  name: string;
  url: string;
  icon: React.ReactNode;
  isExternal: boolean;
}

const socialItems: SocialItemConfig[] = [
  {
    name: "X",
    url: "https://x.com/Pradnyesh_25",
    icon: <BrandXIcon className="size-[18px] text-[var(--foreground)] group-hover:text-white transition-colors" />,
    isExternal: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/25Pradnyesh",
    icon: <BrandGithubIcon className="size-[20px] text-[var(--foreground)] group-hover:text-white transition-colors" />,
    isExternal: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pradnyesh-s/",
    icon: <BrandLinkedinIcon className="size-[19px]" />,
    isExternal: true,
  },
  {
    name: "Cal.com",
    url: "https://cal.com/pradnyesh",
    icon: <BrandCalIcon className="w-[25px] h-auto" />,
    isExternal: true,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/1397630514554212554",
    icon: <BrandDiscordIcon className="w-[20px] h-auto text-[#5865F2]" />,
    isExternal: true,
  },
  {
    name: "Telegram",
    url: "https://t.me/Pradnyesh_25",
    icon: <BrandTelegramIcon className="size-[20px]" />,
    isExternal: true,
  },
  {
    name: "Email",
    url: "mailto:workspace.pradnyesh@gmail.com",
    icon: <BrandEmailIcon className="size-[18px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />,
    isExternal: false,
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: <BrandResumeIcon className="size-[18px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors" />,
    isExternal: true,
  },
];

interface ConnectionItemProps {
  item: SocialItemConfig;
  index: number;
}

function ConnectionItem({ item, index }: ConnectionItemProps) {
  const borderClasses = `
    ${index < 6 ? "border-b border-edge" : "border-b-0"}
    ${index < 4 ? "sm:border-b sm:border-edge" : "sm:border-b-0"}
    ${index % 2 === 0 ? "border-r border-edge" : "border-r-0"}
    ${index % 4 !== 3 ? "sm:border-r sm:border-edge" : "sm:border-r-0"}
  `.trim();

  return (
    <a
      href={item.url}
      target={item.isExternal ? "_blank" : undefined}
      rel={item.isExternal ? "noopener noreferrer" : undefined}
      className={`group flex h-16 sm:h-[70px] items-center justify-between px-3.5 sm:px-4 md:px-5 hover:bg-zinc-900/20 dark:hover:bg-muted/20 transition-colors duration-150 ${borderClasses}`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-[7px] border border-zinc-800/60 bg-zinc-900/30 dark:bg-muted/20 transition-colors group-hover:border-zinc-700/80">
          {item.icon}
        </div>
        <span className="text-[14px] sm:text-[15px] font-medium leading-none text-zinc-200 group-hover:text-white transition-colors truncate">
          {item.name}
        </span>
      </div>
      <ArrowUpRight
        className="size-2.5 sm:size-3 text-zinc-500/70 opacity-40 group-hover:opacity-80 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0 ml-1.5"
        strokeWidth={1.5}
      />
    </a>
  );
}

export default function SocialLinks() {
  return (
    <section
      data-slot="panel"
      className="screen-line-before border-x border-b border-edge bg-[var(--background)]"
    >
      <h2 className="sr-only">Social Links &amp; Connections</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4">
        {socialItems.map((item, idx) => (
          <ConnectionItem key={item.name} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
}
