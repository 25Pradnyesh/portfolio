"use client"

import { portfolioData } from "@/data/portfolio"
import { ArrowUpRight } from "lucide-react"

import { GithubIcon } from "@/components/portfolio-icons"

export default function Projects() {
  const { projects } = portfolioData

  return (
    <section
      id="projects"
      data-slot="panel"
      className="screen-line-before screen-line-after border-edge border-x before:content-none after:content-none"
    >
      {/* Section Header */}
      <div className="border-edge flex items-center justify-between border-b px-4 py-3">
        <h2 className="section-heading">Projects</h2>
        <span className="font-mono text-[10px] text-[var(--muted-foreground)] tabular-nums">
          ({projects.length})
        </span>
      </div>

      {/* Project List */}
      <div className="border-edge border-b">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group border-edge border-b px-4 py-4 transition-colors last:border-b-0 hover:bg-[var(--muted)]/30"
          >
            <div className="flex items-start gap-3">
              {/* Index Number */}
              <span className="w-6 shrink-0 pt-0.5 font-mono text-[10px] text-[var(--muted-foreground)]/40 tabular-nums">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1 space-y-2">
                {/* Title + Period */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-sm leading-tight font-medium text-[var(--foreground)]">
                    {project.title}
                  </h3>
                  {project.period && (
                    <span className="shrink-0 pt-0.5 font-mono text-[10px] whitespace-nowrap text-[var(--muted-foreground)] tabular-nums">
                      {project.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="font-mono text-[10px] text-[var(--muted-foreground)]/70">
                  {project.technologies.join(" · ")}
                </div>

                {/* Achievement Badge */}
                {project.achievement && (
                  <div className="inline-flex items-center gap-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 font-mono text-[10px] font-medium text-emerald-500">
                    {project.achievement}
                  </div>
                )}

                {/* Links (shown on hover) */}
                {(project.githubUrl || project.projectUrl) && (
                  <div className="flex items-center gap-3 pt-1 opacity-0 transition-opacity group-hover:opacity-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
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
                        className="inline-flex items-center gap-1 font-mono text-[10px] text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
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
  )
}
