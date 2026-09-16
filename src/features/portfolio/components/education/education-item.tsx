import { GraduationCapIcon, InfinityIcon } from "lucide-react"

import { IconTile } from "@/components/ui/icon-tile"
import { Tag } from "@/components/ui/tag"
import type { Education } from "@/features/portfolio/types/education"

export function EducationItem({ item }: { item: Education }) {
  const { start, end } = item.period
  const isOngoing = !end

  return (
    <div className="flex items-start gap-3">
      <IconTile className="mt-0.5 shrink-0">
        <GraduationCapIcon className="size-3.5" />
      </IconTile>

      <div className="min-w-0 flex-1 space-y-1">
        <h3 className="text-base leading-snug font-medium text-balance text-foreground">
          {item.school}
        </h3>

        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 text-sm">
          <span className="font-normal text-muted-foreground">
            {item.degree}
            {item.fieldOfStudy ? ` · ${item.fieldOfStudy}` : ""}
          </span>

          <span className="shrink-0 font-mono text-xs text-muted-foreground/75 tabular-nums sm:text-sm">
            <span>{start}</span>
            <span className="mx-0.5 font-mono">—</span>
            {isOngoing ? (
              <InfinityIcon
                className="inline-block size-3.5 translate-y-[0.5px]"
                aria-label="Present"
                strokeWidth={1.5}
              />
            ) : (
              <span>{end}</span>
            )}
          </span>
        </div>

        {item.description && (
          <p className="pt-0.5 text-sm leading-relaxed text-muted-foreground/80">
            {item.description}
          </p>
        )}

        {Array.isArray(item.skills) && item.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-2">
            {item.skills.map((skill, index) => (
              <li key={index} className="flex">
                <Tag>{skill}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
