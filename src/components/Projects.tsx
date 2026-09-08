"use client";

import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="border-x border-b border-edge">
      {/* Panel Header */}
      <div className="px-4 sm:px-5 py-3 border-b border-edge flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--foreground)]">
          Projects
        </h2>
        <span className="font-mono text-xs text-[var(--muted-foreground)]">
          / selected works
        </span>
      </div>

      {/* Editorial List */}
      <div className="divide-y divide-edge">
        {projects.map((project) => (
          <div
            key={project.id}
            className="p-4 sm:p-5 space-y-3 hover:bg-[var(--muted)]/40 transition-colors"
          >
            {/* Top row: Number/Index + Period */}
            <div className="flex items-center justify-between font-mono text-[11px] text-[var(--muted-foreground)]">
              <span className="text-[var(--foreground)] font-semibold tracking-wider">
                {project.number}
              </span>
              {project.period && <span>{project.period}</span>}
            </div>

            {/* Title & Achievement callout if any */}
            <div>
              <div className="flex items-baseline gap-3 flex-wrap">
                <h3 className="text-base sm:text-lg font-semibold tracking-tight text-[var(--foreground)]">
                  {project.title}
                </h3>
                {project.achievement && (
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800 text-emerald-400 font-medium">
                    {project.achievement}
                  </span>
                )}
              </div>

              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mt-2">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] px-1.5 py-0.5 bg-[var(--muted)] border border-edge rounded text-[var(--muted-foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-4 pt-1 font-mono text-xs">
              {project.projectUrl && (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[var(--foreground)] hover:underline underline-offset-4"
                  aria-label={`View project ${project.title}`}
                >
                  <span>View Project</span>
                  <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                  aria-label={`View GitHub repository for ${project.title}`}
                >
                  <GithubIcon className="size-3.5" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
