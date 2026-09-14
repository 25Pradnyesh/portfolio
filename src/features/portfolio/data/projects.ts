export interface ProjectItemData {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  link?: string;
  githubUrl?: string;
  description: string;
  skills: string[];
  achievement?: string;
  isExpanded?: boolean;
}

export const PROJECTS: ProjectItemData[] = [
  {
    id: "reclaim",
    title: "Reclaim",
    period: { start: "2024" },
    description:
      "AI-powered phone addiction management and behavioral focus application. Analyzes usage patterns and applies adaptive interventions to curb compulsive phone checks. Built and shipped in 6 days during the WeMakeDevs FutureStack GenAI Hackathon.",
    skills: ["Next.js 14", "Tailwind CSS", "Supabase", "Cerebras API", "Llama 3"],
    achievement: "WeMakeDevs FutureStack GenAI Hackathon (Shipped in 6 days)",
    isExpanded: true,
  },
  {
    id: "travel-ai",
    title: "Travel AI",
    period: { start: "2024" },
    link: "https://github.com/25Pradnyesh/Travel-AI-",
    githubUrl: "https://github.com/25Pradnyesh/Travel-AI-",
    description:
      "AI system for extracting exact geographical travel locations from Instagram reels, photos, and descriptions, automatically resolving coordinates and organizing discovered spots directly into interactive Google Maps.",
    skills: ["Next.js", "Python", "FastAPI", "Computer Vision", "Google Maps API"],
    isExpanded: true,
  },
  {
    id: "penguin-protocol",
    title: "Penguin Protocol",
    period: { start: "2024" },
    description:
      "Decentralized AI investment syndicate leveraging coordinated autonomous agents to evaluate, score, and co-invest in early-stage on-chain ecosystems.",
    skills: ["Monad", "Web3", "Smart Contracts", "AI Agents", "Solidity"],
    achievement: "Winner — Monad Blitz Pune",
    isExpanded: false,
  },
  {
    id: "voiceads",
    title: "VoiceAds",
    period: { start: "2024" },
    description:
      "AI voice advertising engine that synthesizes dynamic audio advertisements tailored to listener context and programmatic audio feeds.",
    skills: ["AI Voice", "FastAPI", "Python", "LLMs", "Audio Processing"],
    achievement: "AIBoomi Startup Weekend — Pune",
    isExpanded: false,
  },
  {
    id: "design-resource-vault",
    title: "Design Resource Vault",
    period: { start: "2024" },
    link: "https://github.com/25Pradnyesh/Design-Resource-Vault",
    githubUrl: "https://github.com/25Pradnyesh/Design-Resource-Vault",
    description:
      "Curated visual platform for discovering, bookmarking, and organizing high-caliber design engineering resources, UI kits, and typography systems.",
    skills: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    isExpanded: false,
  },
  {
    id: "vertifarm",
    title: "VertiFarm",
    period: { start: "2024" },
    link: "https://github.com/25Pradnyesh/vertifarm-app",
    githubUrl: "https://github.com/25Pradnyesh/vertifarm-app",
    description:
      "Smart vertical farming dashboard integrating real-time environmental IoT sensor monitoring, threshold alerts, and crop health tracking.",
    skills: ["React", "IoT", "Data Visualization", "System Architecture"],
    isExpanded: false,
  },
];
