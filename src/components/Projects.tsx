"use client";

import { useState } from "react";
import { ExternalLink, ChevronsUpDown, ChevronDown, ChevronUp } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  const { projects } = portfolioData;
  const [expandedId, setExpandedId] = useState<string | null>(
    projects[0]?.id ?? null
  );
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="screen-line-bottom">
      {/* Section Header */}
      <div className="px-4 sm:px-5 py-3.5 border-b border-[var(--edge)] screen-line-bottom">
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--foreground)]">
          Projects{" "}
          <sup className="font-mono text-xs text-[var(--muted-foreground)] font-normal">
            ({projects.length})
          </sup>
        </h2>
      </div>

      {/* Project Items */}
      <div className="border-b border-[var(--edge)]">
        {visibleProjects.map((project) => {
          const isExpanded = expandedId === project.id;

          return (
            <div
              key={project.id}
              className="border-b border-[var(--edge)] last:border-b-0"
            >
              {/* Project header row */}
              <button
                onClick={() =>
                  setExpandedId(isExpanded ? null : project.id)
                }
                className="w-full flex items-center justify-between px-4 sm:px-5 py-3.5 text-left hover:bg-[var(--muted)]/40 transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="flex size-6 shrink-0 items-center justify-center rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--foreground)] truncate">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs text-[var(--muted-foreground)]">
                      {project.period}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`GitHub for ${project.title}`}
                    >
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                  <ChevronsUpDown className="size-3.5 text-[var(--muted-foreground)]" />
                </div>
              </button>

              {/* Expanded Content */}
              {isExpanded && (
                <div className="px-4 sm:px-5 pb-4 pl-[52px] sm:pl-[56px] space-y-3">
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {project.description}
                  </p>

                  {project.achievement && (
                    <p className="font-mono text-xs text-emerald-400">
                      🏆 {project.achievement}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[11px] px-1.5 py-0.5 rounded border border-[var(--edge)] bg-[var(--muted)] text-[var(--muted-foreground)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <GithubIcon className="size-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                    {project.projectUrl && project.projectUrl !== project.githubUrl && (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                      >
                        <ExternalLink className="size-3" />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Show More / Less */}
      {projects.length > 3 && (
        <div className="flex justify-center py-3 border-b border-[var(--edge)]">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-[var(--edge)] text-sm text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <ChevronUp className="size-3.5" />
            ) : (
              <ChevronDown className="size-3.5" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
