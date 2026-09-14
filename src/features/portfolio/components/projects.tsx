"use client";

import React, { useState } from "react";
import { ArrowUpRightIcon, ChevronDownIcon, FolderGit2Icon } from "lucide-react";
import { PROJECTS, type ProjectItemData } from "../data/projects";
import { Panel, PanelContent, PanelHeader, PanelTitle, PanelTitleSup } from "@/components/panel";

function ProjectItem({ project }: { project: ProjectItemData }) {
  const [isOpen, setIsOpen] = useState(project.isExpanded ?? false);

  return (
    <div className="border-b border-border/70 last:border-b-0">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group flex cursor-pointer items-center justify-between p-4 sm:p-5 transition-colors hover:bg-muted/30"
      >
        {/* Left Icon */}
        <div className="flex size-9 shrink-0 items-center justify-center rounded border border-border/80 bg-muted/40 text-muted-foreground group-hover:text-foreground">
          <FolderGit2Icon className="size-4" aria-hidden="true" />
        </div>

        {/* Content with dashed left border */}
        <div className="ml-4 flex flex-1 items-center justify-between border-l border-dashed border-border/80 pl-4">
          <div className="space-y-0.5">
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-medium text-foreground">
                {project.title}
              </h3>
              {project.achievement && (
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 max-sm:hidden">
                  {project.achievement}
                </span>
              )}
            </div>
            <p className="font-mono text-xs text-muted-foreground/70">
              {project.period.start}
              {project.period.end ? ` — ${project.period.end}` : ""}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex size-7 items-center justify-center rounded text-muted-foreground/60 transition-colors hover:text-foreground hover:bg-muted/60"
                aria-label={`Open ${project.title} project`}
              >
                <ArrowUpRightIcon className="size-4" />
              </a>
            )}

            <div className="text-muted-foreground/60 transition-transform duration-200">
              <ChevronDownIcon
                className={`size-4 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-foreground" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Collapsible details */}
      {isOpen && (
        <div className="border-t border-border/40 bg-muted/10 px-5 py-4 pl-16 space-y-3">
          {project.achievement && (
            <div className="sm:hidden font-mono text-[11px] text-amber-300">
              {project.achievement}
            </div>
          )}

          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {project.skills && project.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/60 bg-muted/40 text-muted-foreground/90"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <div className="flex items-center gap-2">
          <PanelTitle>
            <a href="#projects" className="hover:underline underline-offset-4">
              Projects
            </a>
          </PanelTitle>
          <PanelTitleSup>({PROJECTS.length})</PanelTitleSup>
        </div>
        <span className="font-mono text-xs text-muted-foreground/70">
          FEATURED WORK
        </span>
      </PanelHeader>

      <PanelContent className="p-0">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </PanelContent>
    </Panel>
  );
}
