import React from "react";
import { GraduationCapIcon } from "lucide-react";
import { EDUCATION } from "../data/education";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <div className="flex items-center gap-3">
          <PanelTitle>
            <a href="#education" className="hover:underline underline-offset-4">
              Education
            </a>
          </PanelTitle>
        </div>
        <span className="font-mono text-xs text-muted-foreground/70">
          ACADEMICS
        </span>
      </PanelHeader>

      <PanelContent className="p-5 sm:p-6 space-y-4">
        {EDUCATION.map((edu) => (
          <div
            key={edu.id}
            className="flex items-start justify-between gap-3 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded border border-border/80 bg-muted/40 text-muted-foreground">
                <GraduationCapIcon className="size-3.5" aria-hidden="true" />
              </div>

              <div className="space-y-0.5">
                <h3 className="text-sm sm:text-base font-medium text-foreground">
                  {edu.institution}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {edu.degree}
                </p>
                <p className="font-mono text-[11px] text-muted-foreground/60">
                  {edu.location}
                </p>
              </div>
            </div>

            <span className="font-mono text-xs text-muted-foreground/80 tabular-nums whitespace-nowrap">
              {edu.period}
            </span>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
