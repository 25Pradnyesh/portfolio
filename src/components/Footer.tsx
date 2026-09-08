"use client";

import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const { footer } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-x border-b border-edge p-4 sm:p-5 mb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-[var(--muted-foreground)]">
        <div>
          <p className="font-semibold text-[var(--foreground)] uppercase tracking-wider">
            {footer.name}
          </p>
          <p className="text-[11px] mt-0.5">
            {footer.title} · {footer.location}
          </p>
          <p className="text-[10px] mt-1 text-[var(--muted-foreground)]/70">
            © {footer.year} · All Rights Reserved
          </p>
        </div>

        <button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-edge rounded hover:bg-[var(--muted)] text-[var(--foreground)] transition-colors self-end sm:self-auto"
          aria-label="Scroll to top"
        >
          <span>Scroll to top</span>
          <ArrowUp className="size-3 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
