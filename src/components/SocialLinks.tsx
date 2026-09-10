"use client";

import { ArrowUpRight } from "lucide-react";
import {
  BrandXIcon,
  BrandGithubIcon,
  BrandLinkedinIn,
  BrandCalIcon,
  BrandEmailIcon,
  BrandResumeIcon,
} from "@/components/Icons";

const socialItems = [
  {
    name: "X",
    handle: "@Pradnyesh_25",
    url: "https://x.com/Pradnyesh_25",
    icon: <BrandXIcon className="size-4 text-white" />,
    containerClass: "bg-zinc-900/90 border border-zinc-800",
    isExternal: true,
  },
  {
    name: "GitHub",
    handle: "25Pradnyesh",
    url: "https://github.com/25Pradnyesh",
    icon: <BrandGithubIcon className="size-4.5 text-white" />,
    containerClass: "bg-zinc-900/90 border border-zinc-800",
    isExternal: true,
  },
  {
    name: "Cal.com",
    handle: "cal.com/pradnyesh",
    url: "https://cal.com/pradnyesh",
    icon: <BrandCalIcon className="w-5.5 h-auto text-white" />,
    containerClass: "bg-zinc-900/90 border border-zinc-800",
    isExternal: true,
  },
  {
    name: "LinkedIn",
    handle: "in/pradnyesh-s",
    url: "https://www.linkedin.com/in/pradnyesh-s/",
    icon: <BrandLinkedinIn className="size-4.5 text-white" />,
    containerClass: "bg-[#0A66C2] border border-[#0A66C2]",
    isExternal: true,
  },
  {
    name: "Email",
    handle: "workspace.pradnyesh@gmail.com",
    url: "mailto:workspace.pradnyesh@gmail.com",
    icon: <BrandEmailIcon className="size-4 text-zinc-300" />,
    containerClass: "bg-zinc-900/90 border border-zinc-800",
    isExternal: false,
  },
  {
    name: "Resume",
    handle: "resume.pdf",
    url: "/resume.pdf",
    icon: <BrandResumeIcon className="size-4 text-zinc-300" />,
    containerClass: "bg-zinc-900/90 border border-zinc-800",
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
        <div className="grid grid-cols-2 md:grid-cols-3">
          {socialItems.map((item, idx) => (
            <a
              key={item.name}
              href={item.url}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className={`group flex items-center gap-3 px-3 py-3 sm:px-4 sm:py-3.5 hover:bg-zinc-900/40 transition-colors duration-150 border-b border-edge ${
                idx % 2 === 0 ? "border-r md:border-r-0" : ""
              } ${idx % 3 !== 2 ? "md:border-r" : ""}`}
            >
              {/* 36px authentic brand icon container */}
              <div
                className={`flex size-9 sm:size-[36px] shrink-0 items-center justify-center rounded-lg transition-colors duration-150 ${item.containerClass}`}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-zinc-100 group-hover:text-white transition-colors">
                  {item.name}
                </div>
                <div
                  className="font-mono text-[9.5px] sm:text-[11px] text-zinc-500 group-hover:text-zinc-400 truncate tracking-tight transition-colors"
                  title={item.handle}
                >
                  {item.handle}
                </div>
              </div>
              <ArrowUpRight className="size-3.5 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-150 shrink-0 ml-auto" />
            </a>
          ))}
        </div>
      </section>

      {/* DIAGONAL-STRIPED DIVIDER */}
      <div className="diagonal-divider" />
    </>
  );
}
