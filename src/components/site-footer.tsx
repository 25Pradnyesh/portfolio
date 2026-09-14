import React from "react";
import Link from "next/link";
import { USER } from "@/features/portfolio/data/user";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-screen overflow-x-clip px-2 pb-16">
      <div className="screen-line-top mx-auto border-x border-border p-4 text-xs font-mono text-muted-foreground md:max-w-3xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-foreground">
              {USER.name} <span className="text-muted-foreground/60">—</span> {USER.role}
            </p>
            <p className="text-muted-foreground/80">{USER.location}</p>
          </div>

          <div className="flex flex-col gap-1 text-left sm:text-right">
            <p className="text-muted-foreground/80">
              © {currentYear} {USER.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:justify-end">
              <Link href="#hero" className="transition-colors hover:text-foreground">
                Back to top ↑
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
