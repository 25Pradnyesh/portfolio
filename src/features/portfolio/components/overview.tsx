import React from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  GraduationCapIcon,
  HammerIcon,
  MailIcon,
  MapPinIcon,
} from "lucide-react";
import { USER } from "../data/user";
import { Panel, PanelContent } from "@/components/panel";
import { CurrentLocalTime } from "./current-local-time";

export function Overview() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview & Metadata</h2>

      <PanelContent className="relative grid gap-x-8 gap-y-3 sm:grid-cols-2 p-5 sm:p-6">
        {/* Left Column */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <BriefcaseIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground/90 font-medium">{USER.role}</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <HammerIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <span className="font-mono text-xs text-foreground/90">
              {USER.statusDescriptor.split(",")[0] || "Currently building"}
            </span>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <MapPinIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground/90">{USER.location}</span>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <GraduationCapIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <span className="text-foreground/90">{USER.university}</span>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3">
          <CurrentLocalTime timeZone={USER.timeZone} />

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <MailIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <a
              href={`mailto:${USER.email}`}
              className="font-mono text-xs link-underline text-foreground/90 hover:text-foreground"
            >
              {USER.email}
            </a>
          </div>

          <div className="flex items-center gap-2.5 text-xs sm:text-sm text-muted-foreground">
            <CalendarIcon className="size-4 shrink-0 text-muted-foreground/60" aria-hidden="true" />
            <a
              href={USER.calUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs link-underline text-foreground/90 hover:text-foreground"
            >
              cal.com/pradnyesh
            </a>
          </div>
        </div>

        {/* Subtle center vertical divider on desktop matching chanhdai */}
        <div
          className="pointer-events-none absolute inset-y-4 left-1/2 -z-1 w-px border-r border-dashed border-border/80 max-sm:hidden"
          aria-hidden="true"
        />
      </PanelContent>
    </Panel>
  );
}
