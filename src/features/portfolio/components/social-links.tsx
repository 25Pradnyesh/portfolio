import { addQueryParams } from "@/utils/url"
import { ArrowUpRightIcon } from "lucide-react"

import { UTM_PARAMS } from "@/config/site"
import {
  HandwrittenArrow,
  HandwrittenNote,
} from "@/features/portfolio/components/handwritten-note"
import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
} from "@/features/portfolio/components/panel"
import { PanelTitleCopy } from "@/features/portfolio/components/panel-title-copy"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

const ID = "connections"

export function SocialLinks() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Connections</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="p-0">
        <div className="grid grid-cols-2 divide-x divide-y divide-line border-b border-line md:grid-cols-4">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.name}
              href={
                item.name === "resume"
                  ? item.href
                  : addQueryParams(item.href, UTM_PARAMS)
              }
              target={item.name === "email" ? undefined : "_blank"}
              rel={item.name === "email" ? undefined : "noopener noreferrer"}
              className="group relative flex items-center justify-between p-3.5 transition-colors hover:bg-muted/40"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <span className="flex size-5 shrink-0 items-center justify-center text-foreground/80 transition-colors group-hover:text-foreground [&_svg]:size-4">
                  {SOCIAL_ICONS[item.name]}
                </span>
                <div className="flex min-w-0 flex-col">
                  <span className="truncate font-mono text-xs font-medium text-foreground">
                    {item.title}
                  </span>
                  <span className="truncate font-mono text-[11px] text-muted-foreground">
                    {item.handle}
                  </span>
                </div>
              </div>
              <ArrowUpRightIcon className="size-3.5 shrink-0 text-muted-foreground/50 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </PanelContent>

      <HandwrittenNote className="-top-4 right-full mr-4 hidden w-20 flex-col items-end lg:flex">
        <span className="-rotate-6">connect</span>
        <HandwrittenArrow className="size-7 translate-x-4 -scale-x-100 -rotate-6" />
      </HandwrittenNote>
    </Panel>
  )
}
