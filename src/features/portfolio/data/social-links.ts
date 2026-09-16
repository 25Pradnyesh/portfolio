import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth.
 * Exactly 8 connections in Row 1 (X, GitHub, LinkedIn, Cal.com)
 * and Row 2 (Discord, Telegram, Email, Resume).
 */
export const SOCIAL = {
  x: {
    title: "X",
    handle: "@Pradnyesh_25",
    href: "https://x.com/Pradnyesh_25",
    sameAs: true,
  },
  github: {
    title: "GitHub",
    handle: "25Pradnyesh",
    href: "https://github.com/25Pradnyesh",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "pradnyesh-s",
    href: "https://linkedin.com/in/pradnyesh-s",
    sameAs: true,
  },
  cal: {
    title: "Cal.com",
    handle: "pradnyesh",
    href: "https://cal.com/pradnyesh",
    sameAs: true,
  },
  discord: {
    title: "Discord",
    handle: "1397630514554212554",
    href: "https://discord.com/users/1397630514554212554",
  },
  telegram: {
    title: "Telegram",
    handle: "Pradnyesh_25",
    href: "https://t.me/Pradnyesh_25",
  },
  email: {
    title: "Email",
    handle: "workspace.pradnyesh@gmail.com",
    href: "mailto:workspace.pradnyesh@gmail.com",
  },
  resume: {
    title: "Resume",
    handle: "resume.pdf",
    href: "/resume.pdf",
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
