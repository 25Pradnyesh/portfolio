"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun, Search, Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.add("light");
      window.dispatchEvent(new Event("theme-change"));
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    window.dispatchEvent(new Event("theme-change"));
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Honors", href: "#awards" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--background)]/95 backdrop-blur-md screen-line-bottom">
        <div className="mx-auto max-w-[768px] flex h-12 items-center justify-between px-4 sm:px-5">
          {/* Left: Logo / Brand */}
          <a
            href="#"
            className="font-[var(--font-geist-mono)] font-mono text-sm font-bold tracking-tight text-[var(--foreground)] hover:opacity-80 transition-opacity"
          >
            PS
          </a>

          {/* Right: Nav + Actions */}
          <div className="flex items-center gap-1">
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-0.5 mr-2">
              {navLinks.slice(0, 2).map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2.5 py-1.5 text-[13px] text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors rounded-md hover:bg-[var(--muted)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Command Palette Trigger */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="inline-flex items-center gap-1.5 h-7 px-2 rounded-md text-xs border border-[var(--edge)] text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="Open Command Palette"
              title={`Search (${isMac ? "⌘K" : "Ctrl+K"})`}
            >
              <Search className="size-3.5" />
              <span className="hidden sm:inline-flex items-center gap-0.5 font-mono text-[10px]">
                <kbd className="px-1 py-px rounded border border-[var(--edge)] bg-[var(--muted)]">
                  {isMac ? "⌘" : "Ctrl"}
                </kbd>
                <kbd className="px-1 py-px rounded border border-[var(--edge)] bg-[var(--muted)]">
                  K
                </kbd>
              </span>
            </button>

            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-[var(--edge)] mx-1" />

            {/* GitHub */}
            <a
              href="https://github.com/25Pradnyesh"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>

            {/* Separator */}
            <div className="hidden sm:block w-px h-4 bg-[var(--edge)] mx-0.5" />

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              aria-label="Toggle theme"
              title="Toggle dark/light mode"
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-md text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="size-4" />
              ) : (
                <Menu className="size-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mx-auto max-w-[768px] border-t border-[var(--edge)] bg-[var(--background)] px-4 py-2 space-y-0.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </>
  );
}
