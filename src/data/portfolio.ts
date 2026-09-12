export interface Project {
  id: string;
  title: string;
  period?: string;
  description: string;
  achievement?: string;
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface AchievementItem {
  emoji: string;
  type: string;
  event: string;
  project?: string;
  description?: string;
  date?: string;
}

export interface ExperienceItem {
  role: string;
  duration: string;
  description: string;
  tags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface SocialLinkItem {
  name: string;
  url: string;
  handle: string;
  type?: "email" | "external" | "resume";
}

export interface InterestItem {
  label: string;
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
      cal: string;
      discord?: string;
      telegram?: string;
      email?: string;
      resume: string;
    };
  };
  socialLinks: SocialLinkItem[];
  about: {
    primaryIntro?: string;
    building?: string;
    exploring?: string[];
    paragraphs: string[];
  };
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: Project[];
  achievements: AchievementItem[];
  interests: InterestItem[];
  contact: {
    headline: string;
    prompt: string;
    calUrl: string;
    resumeUrl: string;
  };
  movingTextPhrases: string[];
  footer: {
    name: string;
    year: number;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Pradnyesh",
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
      cal: "https://cal.com/pradnyesh",
      discord: "https://discord.com/users/1397630514554212554",
      telegram: "https://t.me/Pradnyesh_25",
      email: "mailto:workspace.pradnyesh@gmail.com",
      resume: "/resume.pdf",
    },
  },
  socialLinks: [
    {
      name: "X",
      url: "https://x.com/Pradnyesh_25",
      handle: "@Pradnyesh_25",
      type: "external",
    },
    {
      name: "GitHub",
      url: "https://github.com/25Pradnyesh",
      handle: "25Pradnyesh",
      type: "external",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pradnyesh-s/",
      handle: "in/pradnyesh-s",
      type: "external",
    },
    {
      name: "Cal.com",
      url: "https://cal.com/pradnyesh",
      handle: "cal.com/pradnyesh",
      type: "external",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/1397630514554212554",
      handle: "Discord",
      type: "external",
    },
    {
      name: "Telegram",
      url: "https://t.me/Pradnyesh_25",
      handle: "@Pradnyesh_25",
      type: "external",
    },
    {
      name: "Email",
      url: "mailto:workspace.pradnyesh@gmail.com",
      handle: "workspace.pradnyesh@gmail.com",
      type: "email",
    },
    {
      name: "Resume",
      url: "/resume.pdf",
      handle: "resume.pdf",
      type: "resume",
    },
  ],
  about: {
    primaryIntro:
      "AI Engineer & Full-Stack Developer building products across AI, full-stack development and emerging technologies.",
    building:
      "I take vague ideas, turn them into working systems, and ship them — from hackathon prototypes to independent products.",
    exploring: [
      "AI engineering",
      "intelligent interfaces",
      "AI systems",
      "Web3",
      "product development",
    ],
    paragraphs: [
      "AI Engineer & Full-Stack Developer building products across AI, full-stack development and emerging technologies.",
      "I take vague ideas, turn them into working systems, and ship them — from hackathon prototypes to independent products.",
      "AI engineering · intelligent interfaces · AI systems · Web3 · product development",
    ],
  },
  skills: [
    {
      category: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java"],
    },
    {
      category: "Frontend",
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "FastAPI"],
    },
    {
      category: "Database",
      skills: ["SQL", "Supabase"],
    },
    {
      category: "AI",
      skills: ["Generative AI", "LLMs", "AI APIs", "AI Agents"],
    },
    {
      category: "Product",
      skills: ["Figma", "UI/UX", "Prototyping"],
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
      description:
        "Full-stack software engineering, architecture, frontend, backend, and deployment.",
      tags: ["TypeScript", "Next.js", "FastAPI", "System Design"],
    },
    {
      role: "AI / GenAI",
      duration: "~1 year",
      description:
        "Building AI-powered products, integrating LLMs, prompt engineering, and prototyping intelligent systems.",
      tags: ["LLMs", "FastAPI", "Prompt Engineering", "Python", "AI APIs"],
    },
    {
      role: "Web Development",
      duration: "~1–1.5 years",
      description:
        "React, Next.js, Node.js, and TypeScript applications with modern UI/UX.",
      tags: ["React", "Next.js", "Node.js", "Tailwind CSS"],
    },
    {
      role: "Web3",
      duration: "~6–12 months",
      description:
        "Web3 ecosystems, smart contracts, and hackathon project developments.",
      tags: ["Smart Contracts", "Blockchain", "Web3 Ecosystems"],
    },
    {
      role: "UI/UX",
      duration: "~1–1.5 years",
      description: "Product interfaces, Figma, prototyping and design systems.",
      tags: ["Figma", "Design Systems", "Prototyping", "UI/UX"],
    },
    {
      role: "Video / Content",
      duration: "1+ year",
      description: "Content production, editing, and visual storytelling.",
      tags: ["Content Production", "Visual Storytelling", "Editing"],
    },
    {
      role: "Hackathons",
      duration: "Multiple builds",
      description:
        "Competed, shipped products and secured wins across AI, Web3 and full-stack events.",
      tags: ["Rapid Prototyping", "Team Building", "1 Hackathon Win"],
    },
    {
      role: "Independent Projects",
      duration: "Ongoing",
      description:
        "Self-initiated products and experimental builds shipped from zero.",
      tags: ["Product Thinking", "Shipping", "Zero to One"],
    },
  ],
  education: [
    {
      id: "sppu-be",
      institution: "Savitribai Phule Pune University (SPPU)",
      degree: "B.E. — Electronics & Computer Engineering",
      period: "2023—2027",
    },
    {
      id: "bk-birla-12",
      institution: "B.K. Birla College of Arts, Science & Commerce",
      degree: "12th Grade",
      period: "2021—2023",
    },
    {
      id: "skcg-10",
      institution: "Smt. Kantaben Chandulal Gandhi English School",
      degree: "10th Grade",
      period: "2020—2021",
    },
  ],
  projects: [
    {
      id: "travel-ai",
      title: "Travel AI",
      period: "2024",
      description:
        "AI-powered system for extracting exact travel locations from Instagram travel content and organizing discovered locations into Google Maps.",
      technologies: ["Next.js", "Python", "FastAPI", "AI", "Google Maps"],
      githubUrl: "https://github.com/25Pradnyesh/Travel-AI-",
    },
    {
      id: "vertifarm",
      title: "VertiFarm",
      period: "2024",
      description:
        "Smart vertical farming management platform involving environmental monitoring, sensors, alerts and crop health.",
      technologies: ["React", "IoT", "AI", "Dashboard", "UX"],
      githubUrl: "https://github.com/25Pradnyesh/vertifarm-app",
    },
    {
      id: "design-resource-vault",
      title: "Design Resource Vault",
      period: "2024",
      description:
        "Visual-first platform for discovering and organizing high-quality design resources.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/25Pradnyesh/Design-Resource-Vault",
    },
    {
      id: "penguin-protocol",
      title: "Penguin Protocol",
      period: "2024",
      achievement: "🏆 Winner — Monad Blitz Pune",
      description: "Decentralized AI Investment Syndicate.",
      technologies: ["Monad", "Web3", "Smart Contracts", "AI Agents"],
    },
    {
      id: "reclaim",
      title: "Reclaim",
      period: "2024",
      achievement: "WeMakeDevs FutureStack GenAI Hackathon (Shipped in 6 days)",
      description:
        "AI-powered phone addiction management application built during WeMakeDevs FutureStack GenAI Hackathon.",
      technologies: [
        "Next.js 14",
        "Tailwind",
        "Supabase",
        "Cerebras API",
        "Llama",
      ],
    },
    {
      id: "voiceads",
      title: "VoiceAds",
      period: "2024",
      achievement: "AIBoomi Startup Weekend — Pune",
      description: "AI voice advertising MVP.",
      technologies: ["AI", "Voice", "FastAPI", "MVP"],
    },
    {
      id: "starknet-outpost",
      title: "Starknet Outpost",
      period: "2024",
      achievement: "Demo Day Participation",
      description: "Web3 project / demo-day participation.",
      technologies: ["Starknet", "Web3", "Smart Contracts"],
    },
  ],
  achievements: [
    {
      emoji: "🏆",
      type: "Winner",
      event: "Monad Blitz Pune",
      project: "Penguin Protocol",
      description: "Decentralized AI Investment Syndicate",
    },
    {
      emoji: "🚀",
      type: "Hackathon",
      event: "WeMakeDevs FutureStack GenAI Hackathon",
      project: "Reclaim",
      description: "Built and shipped in 6 days",
    },
    {
      emoji: "⚡",
      type: "Demo Day",
      event: "Starknet Outpost",
      description: "Web3 project / demo-day participation",
    },
    {
      emoji: "🎤",
      type: "Startup Weekend",
      event: "AIBoomi — Pune",
      project: "VoiceAds",
      description: "AI voice advertising MVP",
    },
  ],
  interests: [
    { label: "AI Engineering" },
    { label: "Generative AI" },
    { label: "AI Agents" },
    { label: "Foundation Models" },
    { label: "Deep Learning" },
    { label: "Reinforcement Learning" },
    { label: "Computer Vision" },
    { label: "NLP" },
    { label: "AI Systems" },
    { label: "AGI" },
    { label: "Product Design" },
    { label: "Web3" },
  ],
  movingTextPhrases: [
    "AI × SOFTWARE × PRODUCT",
    "BUILDING AI PRODUCTS",
    "FULL-STACK SYSTEMS",
    "EXPERIMENTING WITH AGENTS",
    "SHIPPING FROM ZERO TO ONE",
    "GENERATIVE AI",
    "MACHINE LEARNING",
    "BUILDING WITH CODE",
  ],
  contact: {
    headline: "Let's build something.",
    prompt:
      "Have an interesting project, hackathon, collaboration or opportunity?",
    calUrl: "https://cal.com/pradnyesh",
    resumeUrl: "/resume.pdf",
  },
  footer: {
    name: "Pradnyesh S",
    year: 2026,
  },
};
