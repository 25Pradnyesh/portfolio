"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun, Search } from "lucide-react";
import { BrandGithubIcon, PixelPSLogo } from "@/components/Icons";
import CommandPalette from "@/components/CommandPalette";

function subscribeTheme(callback: () => void) {
  window.addEventListener("theme-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("theme-change", callback);
    window.removeEventListener("storage", callback);
  };
}

function getThemeSnapshot(): "dark" | "light" {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerThemeSnapshot(): "dark" | "light" {
  return "dark";
}

function subscribeNoop() {
  return () => {};
}

function getIsMacSnapshot(): boolean {
  if (typeof navigator === "undefined") return false;
  return /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
}

function getServerIsMacSnapshot(): boolean {
  return false;
}

export default function Navbar() {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot
  );
  const isMac = useSyncExternalStore(
    subscribeNoop,
    getIsMacSnapshot,
    getServerIsMacSnapshot
  );
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.add("light");
      window.dispatchEvent(new Event("theme-change"));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <>
      <header className="sticky top-0 z-50 max-w-screen overflow-x-hidden bg-[var(--background)]/90 backdrop-blur-md px-2 pt-2">
        <div className="screen-line-before screen-line-after mx-auto flex h-12 max-w-3xl items-center justify-between gap-2 border-x border-edge px-3 sm:px-4">
          {/* Logo / Brand - appears when scrolled past hero */}
          <a
            href="#"
            className={`select-none transition-all duration-300 ${
              isScrolled
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-1 pointer-events-none"
            }`}
            aria-label="Home"
          >
            <PixelPSLogo className="h-5 w-8 text-[var(--foreground)]" />
          </a>

          <div className="flex-1" />

          {/* Nav: Home & Blog */}
          <nav className="flex items-center gap-4 mr-2">
            <a
              href="#"
              className="font-mono text-xs sm:text-sm font-medium text-[var(--foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Home
            </a>
            <a
              href="#about"
              className="font-mono text-xs sm:text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
            >
              Blog
            </a>
          </nav>

          {/* Right controls: Command Palette, GitHub, Theme */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="group inline-flex items-center gap-1.5 h-8 px-2.5 rounded-full text-xs font-mono border border-edge bg-[var(--muted)]/40 text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:border-[var(--muted-foreground)]/40 transition-all cursor-pointer select-none"
              aria-label="Search"
            >
              <Search className="size-3.5" />
              <span className="hidden sm:inline font-sans text-xs text-[var(--muted-foreground)]">
                Search…
              </span>
              <span className="inline-flex items-center gap-0.5">
                <kbd className="px-1 py-0.5 text-[10px] rounded border border-edge bg-[var(--background)] font-sans">
                  {isMac ? "⌘" : "Ctrl"}
                </kbd>
                <kbd className="px-1 py-0.5 text-[10px] rounded border border-edge bg-[var(--background)] font-sans">
                  K
                </kbd>
              </span>
            </button>

            {/* GitHub */}
            <a
              href="https://github.com/25Pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-8 items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <BrandGithubIcon className="size-4" />
            </a>

            {/* Separator */}
            <div className="w-px h-4 bg-edge mx-0.5" />

            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              className="flex size-8 items-center justify-center rounded-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors cursor-pointer"
              aria-label="Toggle theme"
              title="Toggle theme"
            >
              {theme === "dark" ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </>
  );
}
