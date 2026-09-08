"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full flex-1 flex flex-col justify-center">
        {/* Top metadata row: Status indicator + Location + Small Editorial Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-6 pb-12 border-b border-white/[0.08]"
        >
          {/* Status & Location */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-xs font-mono">
            {/* Status indicator */}
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-neutral-300 tracking-wide">
                {personal.status}
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-1.5 text-neutral-400">
              <MapPin className="w-3.5 h-3.5 opacity-60" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* Small Editorial Portrait */}
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 grayscale hover:grayscale-0 transition-all duration-300 border border-white/20 p-1 bg-[#111111] shrink-0">
              <div className="relative w-full h-full overflow-hidden bg-neutral-900">
                <Image
                  src={personal.profileImage}
                  alt={personal.name}
                  fill
                  sizes="(max-width: 768px) 64px, 80px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 hidden lg:block leading-tight">
              PORTRAIT /<br />
              ARCHIVE
            </div>
          </div>
        </motion.div>

        {/* Core Hero Editorial Content */}
        <div className="py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#ededed] uppercase leading-[0.95] mb-4">
              {personal.name}
            </h1>
            <p className="font-mono text-sm sm:text-base md:text-lg text-neutral-400 uppercase tracking-widest mb-8">
              {personal.title}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-light leading-relaxed border-l-2 border-white/20 pl-6 my-8">
              &ldquo;{personal.bio}&rdquo;
            </p>
          </motion.div>

          {/* Buttons: VIEW WORK, CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#ededed] text-[#080808] font-mono text-xs uppercase tracking-widest font-semibold hover:bg-white transition-colors duration-200"
            >
              <span>View Work</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-[#ededed] font-mono text-xs uppercase tracking-widest hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              <span>Contact</span>
              <Mail className="w-3.5 h-3.5 opacity-70" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom ticker/descriptor bar */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 w-full pt-6 flex items-center justify-between text-[11px] font-mono text-neutral-500 uppercase tracking-widest border-t border-white/[0.05]">
        <span>00 / INTRODUCTION</span>
        <span className="hidden sm:inline-block">MINIMAL · SWISS · EDITORIAL</span>
        <a href="#work" className="hover:text-neutral-300 transition-colors">
          SCROLL TO EXPLORE ↓
        </a>
      </div>
    </section>
  );
}
