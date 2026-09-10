"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-5 py-3 border-b border-[var(--edge)] screen-line-bottom flex items-center justify-between">
        <span className="section-heading">Projects</span>
        <span className="font-mono text-[10px] text-[var(--muted-foreground)]">
          {projects.length}
        </span>
      </div>

      {/* Project Items - Editorial List */}
      <div className="border-b border-[var(--edge)]">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group flex items-start gap-4 px-5 py-4 border-b border-[var(--edge)] last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors"
          >
            {/* Number */}
            <span className="font-mono text-[10px] text-[var(--muted-foreground)]/50 pt-0.5 shrink-0 w-5 tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="text-[14px] font-medium text-[var(--foreground)] leading-tight group-hover:translate-x-0.5 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-[12px] text-[var(--muted-foreground)] mt-1 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Period - aligned right */}
                <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 pt-0.5 whitespace-nowrap">
                  {project.period}
                </span>
              </div>

              {/* Meta row */}
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                {/* Technologies */}
                <span className="font-mono text-[10px] text-[var(--muted-foreground)]/70">
                  {project.technologies.join(" · ")}
                </span>

                {/* Achievement badge */}
                {project.achievement && (
                  <>
                    <span className="text-[var(--edge)]">|</span>
                    <span className="font-mono text-[10px] text-emerald-500 font-medium">
                      {project.achievement}
                    </span>
                  </>
                )}
              </div>

              {/* Links */}
              {(project.githubUrl || project.projectUrl) && (
                <div className="flex items-center gap-3 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                    >
                      <GithubIcon className="size-3" />
                      Code
                      <ArrowUpRight className="size-2.5" />
                    </a>
                  )}
                  {project.projectUrl &&
                    project.projectUrl !== project.githubUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
                        Live
                        <ArrowUpRight className="size-2.5" />
                      </a>
                    )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
