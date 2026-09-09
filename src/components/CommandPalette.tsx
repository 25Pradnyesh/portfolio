"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Layers,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Trophy,
  Mail,
  Sun,
  Moon,
  ArrowUpRight,
  CornerDownLeft,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  CalIcon,
  ResumeIcon,
} from "@/components/Icons";

interface ActionItem {
  id: string;
  name: string;
  category: "Navigation" | "Links" | "Actions";
  icon: React.ReactNode;
  keywords?: string[];
  perform: () => void;
  isExternal?: boolean;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setSearch("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

  // Toggle theme helper
  const handleToggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    window.dispatchEvent(new Event("theme-change"));
    handleClose();
  };

  const scrollTo = (id: string) => {
    handleClose();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openUrl = (url: string, newTab = true) => {
    handleClose();
    if (newTab) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = url;
    }
  };

  const actions: ActionItem[] = useMemo(
    () => [
      // Navigation
      {
        id: "nav-home",
        name: "Home",
        category: "Navigation",
        icon: <Home className="size-4" />,
        keywords: ["top", "hero", "overview", "start"],
        perform: () => scrollTo("top"),
      },
      {
        id: "nav-about",
        name: "About",
        category: "Navigation",
        icon: <User className="size-4" />,
        keywords: ["bio", "background", "who", "profile"],
        perform: () => scrollTo("about"),
      },
      {
        id: "nav-stack",
        name: "Stack",
        category: "Navigation",
        icon: <Layers className="size-4" />,
        keywords: ["tech", "technologies", "skills", "tools", "languages"],
        perform: () => scrollTo("stack"),
      },
      {
        id: "nav-experience",
        name: "Experience",
        category: "Navigation",
        icon: <Briefcase className="size-4" />,
        keywords: ["work", "career", "history", "jobs"],
        perform: () => scrollTo("experience"),
      },
      {
        id: "nav-education",
        name: "Education",
        category: "Navigation",
        icon: <GraduationCap className="size-4" />,
        keywords: ["degree", "university", "college", "school", "sppu"],
        perform: () => scrollTo("education"),
      },
      {
        id: "nav-projects",
        name: "Projects",
        category: "Navigation",
        icon: <FolderGit2 className="size-4" />,
        keywords: ["work", "code", "repos", "travel ai", "vertifarm", "penguin", "reclaim"],
        perform: () => scrollTo("projects"),
      },
      {
        id: "nav-awards",
        name: "Honors & Awards",
        category: "Navigation",
        icon: <Trophy className="size-4" />,
        keywords: ["achievements", "hackathons", "winner", "monad", "wemakedevs"],
        perform: () => scrollTo("awards"),
      },
      {
        id: "nav-contact",
        name: "Contact",
        category: "Navigation",
        icon: <Mail className="size-4" />,
        keywords: ["email", "message", "reach out", "hire"],
        perform: () => scrollTo("contact"),
      },

      // Links
      {
        id: "link-github",
        name: "GitHub",
        category: "Links",
        icon: <GithubIcon className="size-4" />,
        keywords: ["code", "repositories", "25Pradnyesh"],
        perform: () => openUrl("https://github.com/25Pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-linkedin",
        name: "LinkedIn",
        category: "Links",
        icon: <LinkedinIcon className="size-4" />,
        keywords: ["network", "profile", "connect"],
        perform: () => openUrl("https://www.linkedin.com/in/pradnyesh-s/"),
        isExternal: true,
      },
      {
        id: "link-x",
        name: "X",
        category: "Links",
        icon: <XIcon className="size-3.5" />,
        keywords: ["twitter", "social", "tweets"],
        perform: () => openUrl("https://x.com/Pradnyesh_25"),
        isExternal: true,
      },
      {
        id: "link-cal",
        name: "Cal.com",
        category: "Links",
        icon: <CalIcon className="size-4" />,
        keywords: ["meeting", "schedule", "book", "call", "15 min", "30 min"],
        perform: () => openUrl("https://cal.com/pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-resume",
        name: "Resume",
        category: "Links",
        icon: <ResumeIcon className="size-4" />,
        keywords: ["cv", "pdf", "download", "education", "experience"],
        perform: () => openUrl("/resume.pdf"),
        isExternal: true,
      },

      // Actions
      {
        id: "action-theme",
        name: "Toggle Theme",
        category: "Actions",
        icon: (
          <span className="flex items-center gap-1">
            <Sun className="size-3.5" />
            <span className="text-[10px]">/</span>
            <Moon className="size-3.5" />
          </span>
        ),
        keywords: ["dark", "light", "mode", "color"],
        perform: handleToggleTheme,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  // Filter actions based on query
  const filteredActions = useMemo(() => {
    if (!search.trim()) return actions;
    const query = search.toLowerCase().trim();
    return actions.filter((action) => {
      const matchName = action.name.toLowerCase().includes(query);
      const matchCategory = action.category.toLowerCase().includes(query);
      const matchKeywords = action.keywords?.some((k) => k.toLowerCase().includes(query));
      return matchName || matchCategory || matchKeywords;
    });
  }, [actions, search]);

  // Handle focus when modal opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard navigation inside modal
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredActions.length > 0 ? (prev + 1) % filteredActions.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredActions.length > 0
            ? (prev - 1 + filteredActions.length) % filteredActions.length
            : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].perform();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    },
    [filteredActions, selectedIndex, handleClose]
  );

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selectedEl = listRef.current.querySelector(
        `[data-index="${selectedIndex}"]`
      ) as HTMLElement;
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Command Palette"
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4"
          onKeyDown={handleKeyDown}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-lg border border-edge bg-[var(--background)] shadow-2xl z-10"
          >
            {/* Search Input Bar */}
            <div className="flex items-center border-b border-edge px-3.5 py-3">
              <Search className="size-4 text-[var(--muted-foreground)] shrink-0 mr-2.5" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search..."
                className="w-full bg-transparent font-mono text-xs sm:text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none"
              />
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded border border-edge text-[var(--muted-foreground)] bg-[var(--muted)] select-none">
                ESC
              </span>
            </div>

            {/* Results List */}
            <div
              ref={listRef}
              className="max-h-80 overflow-y-auto p-2 divide-y divide-transparent"
            >
              {filteredActions.length === 0 ? (
                <div className="py-8 text-center font-mono text-xs text-[var(--muted-foreground)]">
                  No matching commands found.
                </div>
              ) : (
                filteredActions.map((action, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={action.id}
                      data-index={idx}
                      onClick={() => action.perform()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded text-left font-mono text-xs transition-colors duration-100 ${
                        isSelected
                          ? "bg-[var(--muted)] text-[var(--foreground)] font-medium border-l-2 border-emerald-500"
                          : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`shrink-0 ${
                            isSelected
                              ? "text-emerald-400"
                              : "text-[var(--muted-foreground)]"
                          }`}
                        >
                          {action.icon}
                        </div>
                        <span className="truncate">{action.name}</span>
                      </div>

                      <div className="flex items-center gap-2 text-[10px] text-[var(--muted-foreground)] shrink-0">
                        <span className="px-1.5 py-0.5 rounded border border-edge/60 bg-[var(--background)]">
                          {action.category}
                        </span>
                        {action.isExternal ? (
                          <ArrowUpRight className="size-3" />
                        ) : isSelected ? (
                          <CornerDownLeft className="size-3 text-emerald-400" />
                        ) : null}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer Status / Keyboard Navigation Hint */}
            <div className="border-t border-edge px-3.5 py-2 flex items-center justify-between font-mono text-[10px] text-[var(--muted-foreground)] bg-[var(--muted)]/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded border border-edge bg-[var(--background)]">↑</kbd>
                  <kbd className="px-1 py-0.5 rounded border border-edge bg-[var(--background)]">↓</kbd>
                  <span>navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded border border-edge bg-[var(--background)]">↵</kbd>
                  <span>select</span>
                </span>
              </div>
              <span className="hidden sm:inline">Pradnyesh Portfolio</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
