import {
  CompassIcon,
  FolderGit2Icon,
  MicIcon,
  NetworkIcon,
  SparklesIcon,
} from "lucide-react"

import type { Project } from "../types/projects"

export const PROJECTS: Project[] = [
  {
    id: "voiceads",
    title: "VoiceAds",
    period: {
      start: "08.2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Next.js",
      "FastAPI",
      "Python",
      "Web Audio API",
      "AI Voice Synthesis",
      "Real-time Streaming",
    ],
    description: `Context-aware programmatic audio advertising platform converting listener intent into real-time, personalized conversational ad insertions.
- Dynamic audio synthesis and low-latency stream splicing for interactive broadcast media
- Intent classification pipeline matching listener conversational context to sponsor inventory
- Built with Next.js, Python/FastAPI, and modern text-to-speech architectures`,
    icon: <MicIcon />,
    isExpanded: true,
  },
  {
    id: "travel-ai",
    title: "Travel AI",
    period: {
      start: "05.2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Python",
      "FastAPI",
      "React",
      "LangChain",
      "OpenAI API",
      "Mapbox GL",
    ],
    description: `Multi-agent travel orchestration engine synthesizing live contextual constraints, weather forecasts, and geographical preferences into optimized interactive trip itineraries.
- Parallelized agent workflow evaluating transit times, opening hours, and budget constraints
- Interactive route visualization with Mapbox GL and real-time geocoding
- Shipped with FastAPI backend and modular React client interface`,
    icon: <CompassIcon />,
    isExpanded: true,
  },
  {
    id: "reclaim",
    title: "Reclaim",
    period: {
      start: "02.2024",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Google Calendar API",
      "Supabase",
      "OpenAI",
    ],
    description: `Intelligent productivity engine that analyzes schedules and autonomously reclaims uninterrupted focus blocks for deep engineering work.
- Algorithmic calendar defragmentation via Google Calendar API integrations
- Priority-weighted task allocation with dynamic rescheduling based on deadline urgency
- Full-stack architecture backed by Next.js, Supabase Postgres, and clean reactive UI`,
    icon: <SparklesIcon />,
    isExpanded: true,
  },
  {
    id: "penguin-protocol",
    title: "Penguin Protocol",
    period: {
      start: "11.2023",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "TypeScript",
      "Node.js",
      "P2P Networking",
      "Cryptographic Proofs",
      "Distributed Systems",
    ],
    description: `Resilient peer-to-peer decentralized storage and content delivery protocol featuring content-addressed chunk verification and fault-tolerant routing.
- Content-addressed chunking algorithm with SHA-256 integrity verification
- Distributed routing table minimizing network hops for high-throughput node discovery
- Resilient replication across distributed nodes with automated peer healing`,
    icon: <NetworkIcon />,
    isExpanded: true,
  },
  {
    id: "design-resource-vault",
    title: "Design Resource Vault",
    period: {
      start: "09.2023",
    },
    link: "https://github.com/25Pradnyesh",
    skills: [
      "Next.js",
      "Tailwind CSS",
      "Radix UI",
      "Search Indexing",
      "Vercel",
    ],
    description: `Curated engineering resource catalog indexing high-signal frontend components, interactive primitives, design systems, and typography pairings.
- Instant client-side fuzzy search across indexed design patterns and code references
- Categorized design tokens, micro-interaction breakdowns, and implementation blueprints
- Built with Next.js, Radix UI primitives, and Tailwind CSS`,
    icon: <FolderGit2Icon />,
    isExpanded: false,
  },
]
