export interface Project {
  number: string;
  id: string;
  title: string;
  period?: string;
  description: string;
  achievement?: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
}

export interface AchievementItem {
  badge: "WINNER" | "HACKATHON" | "DEMO DAY" | "STARTUP WEEKEND";
  event: string;
  project: string;
  detail: string;
  stack?: string;
  isWinner?: boolean;
}

export interface ExperienceItem {
  role: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  university: string;
  period: string;
  college: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    title: string;
    bio: string;
    location: string;
    email: string;
    status: string;
    currentlyBuildingText: string;
    profileImage: string;
    socials: {
      github: string;
      linkedin: string;
      x: string;
    };
  };
  about: {
    paragraphs: string[];
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem;
  projects: Project[];
  achievements: AchievementItem[];
  contact: {
    headline: string;
    prompt: string;
  };
  footer: {
    name: string;
    title: string;
    location: string;
    year: number;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "PRADNYESH S",
    title: "AI Engineer & Full-Stack Developer",
    bio: "I build AI-powered products, full-stack systems, and experimental ideas from zero to shipped.",
    location: "Mumbai · Pune, India",
    email: "workspace.pradnyesh@gmail.com",
    status: "Currently building",
    currentlyBuildingText:
      "Building and experimenting across AI, full-stack development and product engineering.",
    profileImage: "/pfp.jpeg",
    socials: {
      github: "https://github.com/25Pradnyesh",
      linkedin: "https://www.linkedin.com/in/pradnyesh-s/",
      x: "https://x.com/Pradnyesh_25",
    },
  },
  about: {
    paragraphs: [
      "I'm an engineering student focused on building products across AI, full-stack development and emerging technologies.",
      "I enjoy taking vague ideas, turning them into working systems, and shipping them fast — from hackathon prototypes to independent products.",
      "Currently exploring AI engineering, intelligent interfaces, Web3 and product development.",
    ],
  },
  skills: [
    {
      category: "AI",
      skills: ["Python", "GenAI", "LLMs", "AI APIs"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "FastAPI", "Supabase"],
    },
    {
      category: "Product",
      skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    },
    {
      category: "Web3",
      skills: ["Smart Contracts", "Blockchain", "Web3 Ecosystems"],
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "Framer Motion", "VS Code"],
    },
  ],
  experience: [
    {
      role: "Software Development",
      duration: "~1–1.5 years",
      description: "Hands-on product development and independent projects.",
      tags: ["TypeScript", "Next.js", "System Architecture", "Full-Stack"],
    },
    {
      role: "AI / GenAI",
      duration: "~1 year",
      description: "Practical experience building AI-powered products and prototypes.",
      tags: ["LLMs", "FastAPI", "Prompt Engineering", "Python", "AI APIs"],
    },
    {
      role: "Web Development",
      duration: "~1–1.5 years",
      description: "React · Next.js · Node.js · TypeScript",
      tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      role: "Web3",
      duration: "~6–12 months",
      description: "Web3 ecosystems, smart-contract/product experiences and hackathons.",
      tags: ["Smart Contracts", "Ecosystems", "Web3 UI", "Hackathons"],
    },
    {
      role: "UI/UX",
      duration: "~1–1.5 years",
      description: "Product interfaces, Figma, prototyping and design systems.",
      tags: ["Figma", "Design Systems", "Prototyping", "Information Architecture"],
    },
    {
      role: "Video / Content",
      duration: "1+ year",
      description: "Client and agency editing work.",
      tags: ["Content Production", "Visual Storytelling", "Editing"],
    },
  ],
  education: {
    degree: "B.E.",
    field: "Electronics & Computer Engineering",
    university: "Savitribai Phule Pune University",
    period: "2023 — 2027",
    college: "Zeal College of Engineering, Narhe, Pune",
  },
  projects: [
    {
      number: "PROJECT 01",
      id: "travel-ai",
      title: "Travel AI",
      period: "2024",
      description:
        "AI-powered travel-location extraction system that processes Instagram travel content and organizes discovered locations into Google Maps.",
      technologies: ["Next.js", "Python", "FastAPI", "AI", "Google Maps"],
      githubUrl: "https://github.com/25Pradnyesh/Travel-AI-",
      projectUrl: "https://github.com/25Pradnyesh/Travel-AI-",
    },
    {
      number: "PROJECT 02",
      id: "vertifarm",
      title: "VertiFarm",
      period: "2024",
      description:
        "Smart vertical farming management platform for monitoring environmental conditions, sensors, alerts and crop health.",
      technologies: ["React", "IoT", "AI", "Dashboard", "UX"],
      githubUrl: "https://github.com/25Pradnyesh/vertifarm-app",
      projectUrl: "https://github.com/25Pradnyesh/vertifarm-app",
    },
    {
      number: "PROJECT 03",
      id: "design-resource-vault",
      title: "Design Resource Vault",
      period: "2024",
      description:
        "Visual-first platform for discovering and organizing high-quality design resources.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/25Pradnyesh/Design-Resource-Vault",
      projectUrl: "https://github.com/25Pradnyesh/Design-Resource-Vault",
    },
    {
      number: "PROJECT 04",
      id: "penguin-protocol",
      title: "Penguin Protocol",
      period: "2024",
      achievement: "Winner — Monad Blitz Pune",
      description:
        "Decentralized AI Investment Syndicate built to automate and coordinate on-chain liquidity & AI-driven investment strategies.",
      technologies: ["Monad", "Web3", "Smart Contracts", "AI Agents"],
      githubUrl: "https://github.com/25Pradnyesh",
      projectUrl: "https://github.com/25Pradnyesh",
    },
    {
      number: "PROJECT 05",
      id: "reclaim",
      title: "Reclaim",
      period: "2024",
      achievement: "Built in 6 days — WeMakeDevs FutureStack GenAI Hackathon",
      description:
        "AI-powered phone addiction management application built and shipped in 6 days during the hackathon sprint.",
      technologies: [
        "Next.js 14",
        "Tailwind",
        "Supabase",
        "Cerebras API",
        "Llama",
      ],
      githubUrl: "https://github.com/25Pradnyesh",
      projectUrl: "https://github.com/25Pradnyesh",
    },
  ],
  achievements: [
    {
      badge: "WINNER",
      event: "Monad Blitz Pune",
      project: "Penguin Protocol",
      detail: "Decentralized AI Investment Syndicate",
      isWinner: true,
    },
    {
      badge: "HACKATHON",
      event: "WeMakeDevs FutureStack GenAI Hackathon",
      project: "Reclaim",
      detail: "Built and shipped in 6 days",
      stack: "Next.js 14 · Tailwind · Supabase · Cerebras API + Llama",
      isWinner: false,
    },
    {
      badge: "DEMO DAY",
      event: "Starknet Outpost",
      project: "Web3 Product Demonstration",
      detail: "Decentralized ecosystem showcase",
      isWinner: false,
    },
    {
      badge: "STARTUP WEEKEND",
      event: "AIBoomi · Pune",
      project: "VoiceAds",
      detail: "AI voice advertising MVP",
      isWinner: false,
    },
  ],
  contact: {
    headline: "Let's build something.",
    prompt:
      "Have an interesting project, hackathon, collaboration or opportunity?",
  },
  footer: {
    name: "PRADNYESH S",
    title: "AI Engineer & Full-Stack Developer",
    location: "Mumbai · Pune, India",
    year: 2026,
  },
};
