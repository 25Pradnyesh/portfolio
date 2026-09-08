"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 md:py-32 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
              04 / CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ededed] uppercase">
              Skills & Stack
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-xs">
            Core proficiencies spanning artificial intelligence, modern engineering, and product craft.
          </p>
        </div>

        {/* Swiss Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] my-8">
          {skills.map((categoryGroup, index) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-8 bg-[#080808] flex flex-col justify-between hover:bg-neutral-950 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-xs tracking-widest uppercase text-neutral-300 font-semibold">
                    {categoryGroup.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-600">
                    [0{index + 1}]
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {categoryGroup.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-mono text-xs px-2.5 py-1 bg-white/[0.03] border border-white/10 text-neutral-300 hover:border-white/30 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
