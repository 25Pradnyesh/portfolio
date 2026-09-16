import {
  CalendarIcon,
  CodeXmlIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "lucide-react"

import { USER } from "@/features/portfolio/data/user"

import { Panel, PanelContent } from "../panel"
import { CurrentLocalTimeItem } from "./current-local-time-item"
import { EmailItem } from "./email-item"
import {
  IntroItem,
  IntroItemContent,
  IntroItemIcon,
  IntroItemLink,
} from "./intro-item"

export function Overview() {
  return (
    <Panel className="screen-line-bottom-none">
      <h2 className="sr-only">Overview</h2>

      <PanelContent className="grid gap-x-4 gap-y-2.5 sm:grid-cols-2">
        <IntroItem className="sm:col-span-2">
          <IntroItemIcon>
            <CodeXmlIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <span className="font-medium text-foreground">{USER.jobTitle}</span>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
            </span>
          </IntroItemIcon>
          <IntroItemContent>
            Status:{" "}
            <span className="font-medium text-foreground">BUILDING</span>
          </IntroItemContent>
        </IntroItem>

        <IntroItem>
          <IntroItemIcon>
            <MapPinIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(USER.address)}`}
              aria-label={`Location: ${USER.address}`}
            >
              {USER.address}
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <IntroItem className="sm:col-span-2">
          <IntroItemIcon>
            <GraduationCapIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href="https://www.unipune.ac.in"
              aria-label="University: Savitribai Phule Pune University"
            >
              Savitribai Phule Pune University
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>

        <CurrentLocalTimeItem timeZone={USER.timeZone} />

        <EmailItem emailB64={USER.emailB64} />

        <IntroItem>
          <IntroItemIcon>
            <CalendarIcon />
          </IntroItemIcon>
          <IntroItemContent>
            <IntroItemLink
              href="https://cal.com/pradnyesh"
              aria-label="Calendar: cal.com/pradnyesh"
            >
              cal.com/pradnyesh
            </IntroItemLink>
          </IntroItemContent>
        </IntroItem>
      </PanelContent>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 -z-1 w-px -translate-x-2.25 border-r border-dashed border-line max-sm:hidden" />
    </Panel>
  )
}
