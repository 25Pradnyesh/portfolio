"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function SelectedWork() {
  const { projects } = portfolioData;

  return (
    <section id="work" className="py-24 md:py-32 border-b border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-12 border-b border-white/[0.08]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block mb-2">
              01 / PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ededed] uppercase">
              Selected Work
            </h2>
          </div>
          <p className="font-mono text-xs text-neutral-400 max-w-xs">
            Curated selection of intelligent tools, systems, and product experiments.
          </p>
        </div>

        {/* Project List / Grid */}
        <div className="divide-y divide-white/[0.08]">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white/[0.01] transition-colors"
            >
              {/* Large Editorial Project Number */}
              <div className="lg:col-span-2">
                <span className="font-mono text-4xl sm:text-5xl md:text-6xl font-light text-neutral-600 group-hover:text-neutral-300 transition-colors">
                  {project.number}
                </span>
              </div>

              {/* Title & Description */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#ededed] group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xl">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 bg-neutral-900 border border-white/10 text-neutral-300 tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links and Actions */}
              <div className="lg:col-span-4 flex lg:justify-end items-center gap-3 pt-2">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest text-[#ededed] hover:border-white hover:bg-white/5 transition-all"
                  aria-label={`View live demonstration or project for ${project.title}`}
                >
                  <span>Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-xs font-mono uppercase tracking-widest text-[#ededed] hover:border-white hover:bg-white/5 transition-all"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <GithubIcon className="w-3.5 h-3.5 opacity-70" />
                  <span>Code</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
