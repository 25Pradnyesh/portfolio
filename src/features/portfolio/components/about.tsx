import React from "react";
import { USER } from "../data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "@/components/panel";

export function About() {
  return (
    <Panel id="about">
      <PanelHeader>
        <PanelTitle>
          <a href="#about" className="hover:underline underline-offset-4">
            About
          </a>
        </PanelTitle>
      </PanelHeader>

      <PanelContent className="space-y-3.5 text-sm sm:text-[15px] leading-relaxed text-muted-foreground p-5 sm:p-6">
        {USER.aboutParagraphs.map((para, index) => (
          <p key={index} className="text-foreground/90 font-normal">
            {para}
          </p>
        ))}
      </PanelContent>
    </Panel>
  );
}
