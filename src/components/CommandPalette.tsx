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
  Compass,
  GitGraph,
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
  category: "Navigate" | "Links" | "Actions";
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
      // Navigate
      {
        id: "nav-home",
        name: "Home",
        category: "Navigate",
        icon: <Home className="size-3.5" />,
        keywords: ["top", "hero", "start"],
        perform: () => scrollTo("top"),
      },
      {
        id: "nav-about",
        name: "About",
        category: "Navigate",
        icon: <User className="size-3.5" />,
        keywords: ["bio", "background", "who"],
        perform: () => scrollTo("about"),
      },
      {
        id: "nav-contributions",
        name: "Contributions",
        category: "Navigate",
        icon: <GitGraph className="size-3.5" />,
        keywords: ["github", "commits", "activity"],
        perform: () => scrollTo("contributions"),
      },
      {
        id: "nav-stack",
        name: "Stack",
        category: "Navigate",
        icon: <Layers className="size-3.5" />,
        keywords: ["tech", "technologies", "skills"],
        perform: () => scrollTo("stack"),
      },
      {
        id: "nav-experience",
        name: "Experience",
        category: "Navigate",
        icon: <Briefcase className="size-3.5" />,
        keywords: ["work", "career"],
        perform: () => scrollTo("experience"),
      },
      {
        id: "nav-education",
        name: "Education",
        category: "Navigate",
        icon: <GraduationCap className="size-3.5" />,
        keywords: ["degree", "university", "college", "school"],
        perform: () => scrollTo("education"),
      },
      {
        id: "nav-projects",
        name: "Projects",
        category: "Navigate",
        icon: <FolderGit2 className="size-3.5" />,
        keywords: ["work", "code", "repos"],
        perform: () => scrollTo("projects"),
      },
      {
        id: "nav-awards",
        name: "Awards",
        category: "Navigate",
        icon: <Trophy className="size-3.5" />,
        keywords: ["achievements", "hackathons", "winner"],
        perform: () => scrollTo("awards"),
      },
      {
        id: "nav-exploring",
        name: "Exploring",
        category: "Navigate",
        icon: <Compass className="size-3.5" />,
        keywords: ["interests", "research", "learning"],
        perform: () => scrollTo("exploring"),
      },
      {
        id: "nav-contact",
        name: "Contact",
        category: "Navigate",
        icon: <Mail className="size-3.5" />,
        keywords: ["email", "message", "hire"],
        perform: () => scrollTo("contact"),
      },

      // Links
      {
        id: "link-github",
        name: "GitHub",
        category: "Links",
        icon: <GithubIcon className="size-3.5" />,
        keywords: ["code", "repositories"],
        perform: () => openUrl("https://github.com/25Pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-linkedin",
        name: "LinkedIn",
        category: "Links",
        icon: <LinkedinIcon className="size-3.5" />,
        keywords: ["network", "connect"],
        perform: () => openUrl("https://www.linkedin.com/in/pradnyesh-s/"),
        isExternal: true,
      },
      {
        id: "link-x",
        name: "X",
        category: "Links",
        icon: <XIcon className="size-3" />,
        keywords: ["twitter", "social"],
        perform: () => openUrl("https://x.com/Pradnyesh_25"),
        isExternal: true,
      },
      {
        id: "link-cal",
        name: "Cal.com",
        category: "Links",
        icon: <CalIcon className="size-3.5" />,
        keywords: ["meeting", "schedule", "book", "call"],
        perform: () => openUrl("https://cal.com/pradnyesh"),
        isExternal: true,
      },
      {
        id: "link-resume",
        name: "Resume",
        category: "Links",
        icon: <ResumeIcon className="size-3.5" />,
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
            <Sun className="size-3" />
            <span className="text-[8px] text-[var(--muted-foreground)]">
              /
            </span>
            <Moon className="size-3" />
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
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4"
          onKeyDown={handleKeyDown}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -6 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -6 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            className="relative w-full max-w-md overflow-hidden rounded-md border border-[var(--edge)] bg-[var(--background)] shadow-2xl z-10"
          >
            {/* Search Input */}
            <div className="flex items-center border-b border-[var(--edge)] px-3 py-2.5">
              <Search className="size-3.5 text-[var(--muted-foreground)] shrink-0 mr-2" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-[13px] text-[var(--foreground)] placeholder-[var(--muted-foreground)] focus:outline-none font-mono"
              />
            </div>

            {/* Results */}
            <div
              ref={listRef}
              className="max-h-[300px] overflow-y-auto py-0.5"
            >
              {flatActions.length === 0 ? (
                <div className="py-6 text-center text-[12px] font-mono text-[var(--muted-foreground)]">
                  No results found.
                </div>
              ) : (
                Object.entries(groupedActions).map(
                  ([category, categoryActions]) => (
                    <div key={category}>
                      <div className="px-3 pt-2 pb-0.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--muted-foreground)]">
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
                            className={`w-full flex items-center justify-between px-3 py-1.5 text-left text-[12px] font-mono transition-colors duration-75 ${
                              isSelected
                                ? "bg-[var(--muted)] text-[var(--foreground)]"
                                : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                            }`}
                          >
                            <div className="flex items-center gap-2 min-w-0">
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
                              <ArrowUpRight className="size-2.5 text-[var(--muted-foreground)] shrink-0" />
                            ) : isSelected ? (
                              <CornerDownLeft className="size-2.5 text-[var(--muted-foreground)] shrink-0" />
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
            <div className="border-t border-[var(--edge)] px-3 py-1.5 flex items-center justify-between">
              <div className="font-mono text-[10px] text-[var(--muted-foreground)]">
                <span className="font-medium text-[var(--foreground)]">PS</span>
              </div>
              <div className="flex items-center gap-3 font-mono text-[9px] text-[var(--muted-foreground)]">
                <span className="flex items-center gap-0.5">
                  <kbd className="px-1 py-0.5 rounded-sm border border-[var(--edge)] bg-[var(--muted)]">
                    ↵
                  </kbd>
                  Select
                </span>
                <span className="flex items-center gap-0.5">
                  <kbd className="px-1 py-0.5 rounded-sm border border-[var(--edge)] bg-[var(--muted)]">
                    Esc
                  </kbd>
                  Close
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
