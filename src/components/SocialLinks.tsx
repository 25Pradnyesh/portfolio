"use client";

import { ArrowUpRight } from "lucide-react";
import {
  BrandXIcon,
  BrandGithubIcon,
  BrandLinkedinIn,
  BrandCalIcon,
  BrandDiscordIcon,
  BrandTelegramIcon,
  BrandEmailIcon,
  BrandResumeIcon,
} from "@/components/Icons";

interface SocialItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  containerClass: string;
  isExternal: boolean;
}

const socialItems: SocialItem[] = [
  {
    name: "X",
    url: "https://x.com/Pradnyesh_25",
    icon: <BrandXIcon className="size-3.5 text-white" />,
    containerClass: "bg-black border border-zinc-800",
    isExternal: true,
  },
  {
    name: "GitHub",
    url: "https://github.com/25Pradnyesh",
    icon: <BrandGithubIcon className="size-4 text-white" />,
    containerClass: "bg-zinc-900 border border-zinc-800",
    isExternal: true,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pradnyesh-s/",
    icon: <BrandLinkedinIn className="size-4 text-white" />,
    containerClass: "bg-[#0A66C2] border border-[#0A66C2]",
    isExternal: true,
  },
  {
    name: "Cal.com",
    url: "https://cal.com/pradnyesh",
    icon: <BrandCalIcon className="w-5 h-auto text-white" />,
    containerClass: "bg-zinc-900 border border-zinc-800",
    isExternal: true,
  },
  {
    name: "Discord",
    url: "https://discord.com/users/1397630514554212554",
    icon: <BrandDiscordIcon className="size-3.5 text-white" />,
    containerClass: "bg-[#5865F2] border border-[#5865F2]",
    isExternal: true,
  },
  {
    name: "Telegram",
    url: "https://t.me/Pradnyesh_25",
    icon: <BrandTelegramIcon className="size-4 text-white" />,
    containerClass: "bg-[#229ED9] border border-[#229ED9]",
    isExternal: true,
  },
  {
    name: "Email",
    url: "mailto:workspace.pradnyesh@gmail.com",
    icon: <BrandEmailIcon className="size-3.5 text-zinc-300" />,
    containerClass: "bg-zinc-900 border border-zinc-800",
    isExternal: false,
  },
  {
    name: "Resume",
    url: "/resume.pdf",
    icon: <BrandResumeIcon className="size-3.5 text-zinc-300" />,
    containerClass: "bg-zinc-900 border border-zinc-800",
    isExternal: true,
  },
];

export default function SocialLinks() {
  return (
    <>
      <section
        data-slot="panel"
        className="screen-line-before border-x border-edge"
      >
        <h2 className="sr-only">Social Links</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {socialItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={`group flex items-center justify-between px-3 sm:px-3.5 py-3 hover:bg-zinc-900/50 transition-colors border-b border-edge ${
                idx % 2 === 0 ? "border-r" : "border-r-0"
              } ${idx % 4 !== 3 ? "sm:border-r" : "sm:border-r-0"}`}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div
                  className={`flex size-7 shrink-0 items-center justify-center rounded-md ${item.containerClass}`}
                >
                  {item.icon}
                </div>
                <span className="text-xs sm:text-[13.5px] font-medium text-zinc-200 group-hover:text-white transition-colors truncate">
                  {item.name}
                </span>
              </div>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0 ml-1.5" />
            </a>
          ))}
        </div>
      </section>

      {/* DIAGONAL-STRIPED DIVIDER BAND */}
      <div className="diagonal-divider" />
    </>
  );
}
