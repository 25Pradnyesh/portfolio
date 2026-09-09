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
  Bookmark,
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
  category: "Menu" | "Portfolio" | "Social" | "Actions";
  icon: React.ReactNode;
  keywords?: string[];
  perform: () => void;
  isExternal?: boolean;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
}: CommandPaletteProps) {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setSearch("");
    setSelectedIndex(0);
    onClose();
  }, [onClose]);

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
      // Menu
      {
        id: "nav-home",
        name: "Home",
        category: "Menu",
        icon: <Home className="size-4" />,
        keywords: ["top", "hero", "start"],
        perform: () => scrollTo("top"),
      },

      // Portfolio
      {
        id: "nav-about",
        name: "About",
        category: "Portfolio",
        icon: <User className="size-4" />,
        keywords: ["bio", "background", "who"],
        perform: () => scrollTo("about"),
      },
      {
        id: "nav-stack",
        name: "Tech Stack",
        category: "Portfolio",
        icon: <Layers className="size-4" />,
        keywords: ["tech", "technologies", "skills"],
        perform: () => scrollTo("stack"),
      },
      {
        id: "nav-experience",
        name: "Experience",
        category: "Portfolio",
        icon: <Briefcase className="size-4" />,
        keywords: ["work", "career"],
        perform: () => scrollTo("experience"),
      },
      {
        id: "nav-education",
        name: "Education",
        category: "Portfolio",
        icon: <GraduationCap className="size-4" />,
        keywords: ["degree", "university", "college", "school"],
        perform: () => scrollTo("education"),
      },
      {
        id: "nav-projects",
        name: "Projects",
        category: "Portfolio",
        icon: <FolderGit2 className="size-4" />,
        keywords: ["work", "code", "repos"],
        perform: () => scrollTo("projects"),
      },
      {
        id: "nav-awards",
        name: "Honors & Awards",
        category: "Portfolio",
        icon: <Trophy className="size-4" />,
        keywords: ["achievements", "hackathons", "winner"],
        perform: () => scrollTo("awards"),
      },
      {
        id: "nav-interests",
        name: "Exploring",
        category: "Portfolio",
        icon: <Bookmark className="size-4" />,
        keywords: ["interests", "bookmarks"],
        perform: () => scrollTo("interests"),
      },
      {
        id: "nav-contact",
        name: "Contact",
        category: "Portfolio",
        icon: <Mail className="size-4" />,
        keywords: ["email", "message", "hire"],
        perform: () => scrollTo("contact"),
      },

      // Social
      {
        id: "link-github",
        name: "GitHub",
        category: "Social",
        icon: <GithubIcon className="size-4" />,
        keywords: ["code", "repositories"],
        perform: () => openUrl("https://github.com/25Pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-linkedin",
        name: "LinkedIn",
        category: "Social",
        icon: <LinkedinIcon className="size-4" />,
        keywords: ["network", "connect"],
        perform: () => openUrl("https://www.linkedin.com/in/pradnyesh-s/"),
        isExternal: true,
      },
      {
        id: "link-x",
        name: "X",
        category: "Social",
        icon: <XIcon className="size-3.5" />,
        keywords: ["twitter", "social"],
        perform: () => openUrl("https://x.com/Pradnyesh_25"),
        isExternal: true,
      },
      {
        id: "link-cal",
        name: "Book a Meeting",
        category: "Social",
        icon: <CalIcon className="size-4" />,
        keywords: ["meeting", "schedule", "book", "call"],
        perform: () => openUrl("https://cal.com/pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-resume",
        name: "Resume",
        category: "Social",
        icon: <ResumeIcon className="size-4" />,
        keywords: ["cv", "pdf", "download"],
        perform: () => openUrl("/resume.pdf"),
        isExternal: true,
      },

      // Actions
      {
        id: "action-theme",
        name: "Toggle Theme",
        category: "Actions",
        icon: (
          <span className="flex items-center gap-0.5">
            <Sun className="size-3.5" />
            <span className="text-[9px] text-[var(--muted-foreground)]">
              /
            </span>
            <Moon className="size-3.5" />
          </span>
        ),
        keywords: ["dark", "light", "mode"],
        perform: handleToggleTheme,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const filteredActions = useMemo(() => {
    if (!search.trim()) return actions;
    const query = search.toLowerCase().trim();
    return actions.filter((action) => {
      const matchName = action.name.toLowerCase().includes(query);
      const matchCategory = action.category.toLowerCase().includes(query);
      const matchKeywords = action.keywords?.some((k) =>
        k.toLowerCase().includes(query)
      );
      return matchName || matchCategory || matchKeywords;
    });
  }, [actions, search]);

  // Group by category
  const groupedActions = useMemo(() => {
    const groups: Record<string, ActionItem[]> = {};
    filteredActions.forEach((action) => {
      if (!groups[action.category]) groups[action.category] = [];
      groups[action.category].push(action);
    });
    return groups;
  }, [filteredActions]);

  // Flat list for keyboard navigation
  const flatActions = filteredActions;

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          flatActions.length > 0 ? (prev + 1) % flatActions.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          flatActions.length > 0
            ? (prev - 1 + flatActions.length) % flatActions.length
            : 0
        );
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (flatActions[selectedIndex]) {
          flatActions[selectedIndex].perform();
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    },
    [flatActions, selectedIndex, handleClose]
  );

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

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="relative w-full max-w-lg overflow-hidden rounded-lg border border-[var(--edge)] bg-[var(--background)] shadow-2xl z-10"
          >
            {/* Search Input */}
            <div className="flex items-center border-b border-[var(--edge)] px-3.5 py-3">
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
                className="w-full bg-transparent text-sm text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none"
              />
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-[320px] overflow-y-auto py-1"
            >
              {flatActions.length === 0 ? (
                <div className="py-8 text-center text-sm text-[var(--muted-foreground)]">
                  No matching commands found.
                </div>
              ) : (
                Object.entries(groupedActions).map(
                  ([category, categoryActions]) => (
                    <div key={category}>
                      <div className="px-3.5 pt-2 pb-1">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">
                          {category}
                        </span>
                      </div>
                      {categoryActions.map((action) => {
                        const globalIdx = flatActions.indexOf(action);
                        const isSelected = globalIdx === selectedIndex;
                        return (
                          <button
                            key={action.id}
                            data-index={globalIdx}
                            onClick={() => action.perform()}
                            onMouseEnter={() => setSelectedIndex(globalIdx)}
                            className={`w-full flex items-center justify-between px-3.5 py-2 text-left text-sm transition-colors duration-75 ${
                              isSelected
                                ? "bg-[var(--muted)] text-[var(--foreground)]"
                                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div
                                className={`shrink-0 ${
                                  isSelected
                                    ? "text-[var(--foreground)]"
                                    : "text-[var(--muted-foreground)]"
                                }`}
                              >
                                {action.icon}
                              </div>
                              <span className="truncate">{action.name}</span>
                            </div>

                            {action.isExternal ? (
                              <ArrowUpRight className="size-3 text-[var(--muted-foreground)] shrink-0" />
                            ) : isSelected ? (
                              <CornerDownLeft className="size-3 text-[var(--muted-foreground)] shrink-0" />
                            ) : null}
                          </button>
                        );
                      })}
                    </div>
                  )
                )
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-[var(--edge)] px-3.5 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1 font-mono text-[11px] text-[var(--foreground)]">
                <span className="font-bold">PS</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[10px] text-[var(--muted-foreground)]">
                <span className="flex items-center gap-1">
                  Go to Page
                  <kbd className="px-1 py-0.5 rounded border border-[var(--edge)] bg-[var(--muted)]">
                    ↵
                  </kbd>
                </span>
                <span className="flex items-center gap-1">
                  Exit
                  <kbd className="px-1 py-0.5 rounded border border-[var(--edge)] bg-[var(--muted)]">
                    Esc
                  </kbd>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
