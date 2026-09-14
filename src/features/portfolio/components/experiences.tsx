import React from "react";
import { EXPERIENCES } from "../data/experiences";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <div className="flex items-center gap-3">
          <PanelTitle>
            <a href="#experience" className="hover:underline underline-offset-4">
              Experience
            </a>
          </PanelTitle>
        </div>
        <span className="font-mono text-xs text-muted-foreground/70">
          TIMELINE
        </span>
      </PanelHeader>

      <PanelContent className="p-5 sm:p-6 divide-y divide-border/60">
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className="py-5 first:pt-0 last:pb-0 space-y-3">
            {/* Header: Company & Location */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-medium text-foreground">
                  {exp.companyName}
                </h3>
                {exp.isCurrent && (
                  <span className="relative flex size-2 items-center justify-center">
                    <span className="absolute inline-flex size-2 animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                )}
              </div>

              {exp.location && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground/80">
                  <span>{exp.location}</span>
                  {exp.locationType && <span>({exp.locationType})</span>}
                </div>
              )}
            </div>

            {/* Positions */}
            <div className="space-y-4 pl-3 sm:pl-4 border-l border-border/80 ml-1">
              {exp.positions.map((pos) => (
                <div key={pos.id} className="space-y-2 relative">
                  {/* Timeline bullet */}
                  <span className="absolute -left-[17px] sm:-left-[21px] top-1.5 size-1.5 rounded-full bg-muted-foreground/40 border border-background" />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5">
                    <h4 className="text-sm font-medium text-foreground/90">
                      {pos.title}
                    </h4>
                    <span className="font-mono text-xs text-muted-foreground/70 tabular-nums">
                      {pos.period.start}
                      {pos.period.end ? ` — ${pos.period.end}` : " — Present"}
                    </span>
                  </div>

                  {pos.description && (
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {pos.description}
                    </p>
                  )}

                  {pos.skills && pos.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {pos.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[11px] px-2 py-0.5 rounded border border-border/60 bg-muted/30 text-muted-foreground/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </PanelContent>
    </Panel>
  );
}
