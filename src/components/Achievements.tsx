"use client";

import { motion } from "framer-motion";
import { Trophy, Zap, Layers, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (badge: string) => {
    switch (badge) {
      case "WINNER":
        return <Trophy className="w-4 h-4 text-emerald-400" />;
      case "BUILT IN 6 DAYS":
        return <Zap className="w-4 h-4 text-neutral-300" />;
      case "DEMO DAY":
        return <Layers className="w-4 h-4 text-neutral-300" />;
      default:
        return <Sparkles className="w-4 h-4 text-neutral-300" />;
    }
  };

  return (
    <section id="achievements" className="py-24 md:py-32 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
              02 / RECOGNITION
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ededed] uppercase">
              Achievements
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-xs">
            Hackathons, prototype sprints, and competitive product builds.
          </p>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] border border-white/[0.08] my-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.project}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`p-8 md:p-10 bg-[#080808] flex flex-col justify-between transition-colors duration-200 relative group ${
                item.isWinner ? "border-l-2 md:border-l-0 md:ring-1 md:ring-emerald-500/30" : ""
              }`}
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  {item.isWinner ? (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 font-mono text-xs font-semibold tracking-widest uppercase">
                      <Trophy className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{item.badge}</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/10 text-neutral-300 font-mono text-xs tracking-wider uppercase">
                      {getIcon(item.badge)}
                      <span>{item.badge}</span>
                    </div>
                  )}

                  <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider">
                    {item.event}
                  </span>
                </div>

                {/* Project Name */}
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#ededed] mb-2 group-hover:text-white transition-colors">
                  {item.project}
                </h3>

                {/* Detail */}
                <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                  {item.detail}
                </p>
              </div>

              {/* Stack if available */}
              {item.stack && (
                <div className="pt-4 border-t border-white/[0.06] mt-4">
                  <span className="font-mono text-[11px] text-neutral-500 uppercase block mb-1">
                    Stack
                  </span>
                  <p className="font-mono text-xs text-neutral-300">
                    {item.stack}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
