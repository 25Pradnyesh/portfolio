import { TECH_STACK } from "../data/tech-stack"
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel"
import { PanelTitleCopy } from "./panel-title-copy"

const ID = "stack"

export function TechStack() {
  return (
    <Panel id={ID}>
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
          <PanelTitleCopy id={ID} />
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="px-4 py-8">
        <div className="grid grid-cols-5 items-center justify-items-center gap-x-2 gap-y-6 sm:grid-cols-10 sm:gap-x-3 sm:gap-y-6 md:grid-cols-[repeat(15,minmax(0,1fr))] md:gap-x-2 md:gap-y-7">
          {TECH_STACK.map((item) => (
            <a
              key={item.key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-full cursor-pointer items-center justify-center opacity-80 transition-all duration-150 select-none hover:scale-[1.12] hover:opacity-100"
              role="img"
              aria-label={item.name}
              title={item.name}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </PanelContent>
    </Panel>
  )
}
