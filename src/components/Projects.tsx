"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section
      id="projects"
      data-slot="panel"
      className="screen-line-before screen-line-after border-x border-edge before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-b border-edge px-4 py-3 flex items-center justify-between">
        <h2 className="section-heading">Projects</h2>
        <span className="font-mono text-[10px] text-[var(--muted-foreground)] tabular-nums">
          ({projects.length})
        </span>
      </div>

      {/* Project List */}
      <div className="border-b border-edge">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group px-4 py-4 border-b border-edge last:border-b-0 hover:bg-[var(--muted)]/30 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Index Number */}
              <span className="font-mono text-[10px] text-[var(--muted-foreground)]/40 pt-0.5 shrink-0 w-6 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* Title + Period */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm font-medium text-[var(--foreground)] leading-tight">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="font-mono text-[10px] text-[var(--muted-foreground)] shrink-0 pt-0.5 whitespace-nowrap tabular-nums">
                      {project.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="font-mono text-[10px] text-[var(--muted-foreground)]/70">
                  {project.technologies.join(" · ")}
                </div>

                {/* Achievement Badge */}
                {project.achievement && (
                  <div className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md border border-emerald-500/20 bg-emerald-500/10 font-mono text-[10px] text-emerald-500 font-medium">
                    {project.achievement}
                  </div>
                )}

                {/* Links (shown on hover) */}
                {(project.githubUrl || project.projectUrl) && (
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity pt-1">
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
                    {project.projectUrl && (
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
          </div>
        ))}
      </div>
    </section>
  );
}
