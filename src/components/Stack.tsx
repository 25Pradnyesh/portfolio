"use client";

import { portfolioData } from "@/data/portfolio";
import { Cpu, Layout, Server, Sparkles, Box, Wrench } from "lucide-react";

export default function Stack() {
  const { skills } = portfolioData;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "ai":
        return <Cpu className="size-3.5 text-emerald-400" />;
      case "frontend":
        return <Layout className="size-3.5 text-blue-400" />;
      case "backend":
        return <Server className="size-3.5 text-amber-400" />;
      case "product":
        return <Sparkles className="size-3.5 text-purple-400" />;
      case "web3":
        return <Box className="size-3.5 text-cyan-400" />;
      case "tools":
        return <Wrench className="size-3.5 text-zinc-400" />;
      default:
        return <Sparkles className="size-3.5" />;
    }
  };

  return (
    <section id="stack" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Stack
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / technologies
        </span>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-edge border-b border-edge">
        {skills.slice(0, 3).map((group) => (
          <div key={group.category} className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2">
              {getCategoryIcon(group.category)}
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2 py-1 bg-[var(--muted)] border border-edge rounded text-[var(--foreground)] hover:border-white/30 transition-colors select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-edge">
        {skills.slice(3, 6).map((group) => (
          <div key={group.category} className="p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2">
              {getCategoryIcon(group.category)}
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-[var(--foreground)]">
                {group.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs px-2 py-1 bg-[var(--muted)] border border-edge rounded text-[var(--foreground)] hover:border-white/30 transition-colors select-none"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
