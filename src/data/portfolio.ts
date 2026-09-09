export interface Project {
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
  emoji: string;
  type: string;
  event: string;
  project: string;
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
      resume: string;
    };
  };
  socialLinks: SocialLinkItem[];
  about: {
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
    name: "Pradnyesh S",
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
      name: "Cal.com",
      url: "https://cal.com/pradnyesh",
      handle: "cal.com/pradnyesh",
      type: "external",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/pradnyesh-s/",
      handle: "in/pradnyesh-s",
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
    paragraphs: [
      "AI Engineer & Full-Stack Developer with hands-on experience building products across AI, full-stack development and emerging technologies.",
      "I enjoy taking vague ideas, turning them into working systems, and shipping them fast — from hackathon prototypes to independent products.",
      "Currently exploring AI engineering, intelligent interfaces, Web3 and product development.",
    ],
  },
  skills: [
    {
      category: "AI",
      skills: ["Python", "Generative AI", "LLMs", "AI APIs", "AI Agents"],
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
        "Hands-on product development and independent projects.",
      tags: ["TypeScript", "Next.js", "System Architecture", "Full-Stack"],
    },
    {
      role: "AI / GenAI",
      duration: "~1 year",
      description:
        "Practical experience building AI-powered products and prototypes.",
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
      description:
        "Web3 ecosystems, smart-contract/product experiences and hackathons.",
      tags: ["Smart Contracts", "Ecosystems", "Web3 UI", "Hackathons"],
    },
    {
      role: "UI/UX",
      duration: "~1–1.5 years",
      description: "Product interfaces, Figma, prototyping and design systems.",
      tags: [
        "Figma",
        "Design Systems",
        "Prototyping",
        "Information Architecture",
      ],
    },
    {
      role: "Video / Content",
      duration: "1+ year",
      description: "Client and agency editing work.",
      tags: ["Content Production", "Visual Storytelling", "Editing"],
    },
  ],
  education: [
    {
      id: "sppu-be",
      institution: "Savitribai Phule Pune University (SPPU)",
      degree: "B.E. — Electronics & Computer Engineering",
      period: "2023 – 2027",
    },
    {
      id: "bk-birla-12",
      institution: "B.K. Birla College of Arts, Science & Commerce",
      degree: "12th Grade",
      period: "2021 – 2023",
    },
    {
      id: "skcg-10",
      institution: "Smt. Kantaben Chandulal Gandhi English School",
      degree: "10th Grade",
      period: "2020 – 2021",
    },
  ],
  projects: [
    {
      id: "travel-ai",
      title: "Travel AI",
      period: "2024",
      description:
        "AI-powered system that extracts travel locations from Instagram content and organizes discovered locations into Google Maps.",
      technologies: ["Next.js", "Python", "FastAPI", "AI", "Google Maps"],
      githubUrl: "https://github.com/25Pradnyesh/Travel-AI-",
    },
    {
      id: "vertifarm",
      title: "VertiFarm",
      period: "2024",
      description:
        "Smart vertical farming management system for environmental monitoring, sensors, alerts and crop health.",
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
      achievement: "Winner — Monad Blitz Pune",
      description: "Decentralized AI Investment Syndicate.",
      technologies: ["Monad", "Web3", "Smart Contracts", "AI Agents"],
    },
    {
      id: "reclaim",
      title: "Reclaim",
      period: "2024",
      achievement: "WeMakeDevs FutureStack GenAI Hackathon",
      description:
        "AI-powered phone addiction management application. Built and shipped in 6 days during the hackathon.",
      technologies: [
        "Next.js 14",
        "Tailwind",
        "Supabase",
        "Cerebras API",
        "Llama",
      ],
    },
  ],
  achievements: [
    {
      emoji: "🏆",
      type: "Winner",
      event: "Monad Blitz Pune",
      project: "Penguin Protocol",
    },
    {
      emoji: "🚀",
      type: "Hackathon",
      event: "WeMakeDevs FutureStack GenAI Hackathon",
      project: "Reclaim",
    },
    {
      emoji: "⚡",
      type: "Demo Day",
      event: "Starknet Outpost",
      project: "",
    },
    {
      emoji: "🎤",
      type: "Startup Weekend",
      event: "AIBoomi · Pune",
      project: "VoiceAds",
    },
  ],
  interests: [
    { label: "AI Engineering" },
    { label: "Generative AI" },
    { label: "AI Agents" },
    { label: "Foundation Models" },
    { label: "Web3" },
    { label: "Product Design" },
    { label: "Creative Technology" },
  ],
  movingTextPhrases: [
    "BUILDING AI PRODUCTS",
    "SHIPPING FULL-STACK SYSTEMS",
    "EXPERIMENTING WITH NEW IDEAS",
    "BUILDING INTELLIGENT PRODUCTS",
    "AI × SOFTWARE × PRODUCT",
  ],
  contact: {
    headline: "LET'S BUILD SOMETHING.",
    prompt:
      "Have an interesting project, hackathon, collaboration or opportunity?",
    calUrl: "https://cal.com/pradnyesh",
    resumeUrl: "/resume.pdf",
  },
  footer: {
    name: "Pradnyesh S",
    year: 2025,
  },
};
