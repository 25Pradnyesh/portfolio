"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Moon, Sun, Menu, X, Command } from "lucide-react";
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

    // Global shortcut listener for CMD+K / CTRL+K
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
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[var(--background)]/90 backdrop-blur-md px-2 pt-2">
        <div className="mx-auto md:max-w-3xl flex h-12 items-center justify-between border-x border-b border-edge px-4 sm:px-6">
          {/* Left: Brand / Name */}
          <a
            href="#"
            className="font-mono text-xs font-semibold tracking-wider text-[var(--foreground)] hover:opacity-80 transition-opacity uppercase flex items-center gap-2"
          >
            <span className="inline-block size-2 rounded-full bg-[var(--foreground)]" />
            <span>PRADNYESH S</span>
          </a>

          {/* Right Desktop Nav */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              {/* Command Palette Trigger Button */}
              <button
                onClick={() => setIsCommandPaletteOpen(true)}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-mono border border-edge text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                aria-label="Open Command Palette"
                title={`Open Command Palette (${isMac ? "⌘K" : "Ctrl+K"})`}
              >
                <Command className="size-3" />
                <span className="hidden sm:inline text-[10px]">
                  {isMac ? "⌘K" : "Ctrl+K"}
                </span>
              </button>

              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
                aria-label="Toggle theme"
                title="Toggle dark/light mode"
              >
                {theme === "dark" ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-1.5 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mx-auto md:max-w-3xl border-x border-b border-edge bg-[var(--background)] px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] py-1.5"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
      />
    </>
  );
}
