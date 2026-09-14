export interface Position {
  id: string;
  title: string;
  period: {
    start: string;
    end?: string;
  };
  description?: string;
  skills: string[];
}

export interface ExperienceItemData {
  id: string;
  companyName: string;
  companyWebsite?: string;
  location?: string;
  locationType?: "Remote" | "Hybrid" | "On-site";
  isCurrent?: boolean;
  positions: Position[];
}

export const EXPERIENCES: ExperienceItemData[] = [
  {
    id: "atomik-clips",
    companyName: "Atomik Clips",
    location: "Remote",
    locationType: "Remote",
    isCurrent: true,
    positions: [
      {
        id: "clipper-editor",
        title: "Clipper & Short-Form Content Editor",
        period: { start: "2024" },
        description:
          "Produced and edited high-retention short-form video assets, engineered hooks, and managed visual pacing across digital content pipelines.",
        skills: ["Video Production", "Editing", "Visual Storytelling", "Pacing & Retention"],
      },
    ],
  },
  {
    id: "hackathons-product",
    companyName: "Hackathons & Independent Builds",
    location: "Pune · Global",
    locationType: "Hybrid",
    isCurrent: true,
    positions: [
      {
        id: "product-builder",
        title: "Product Engineer & Hackathon Builder",
        period: { start: "2024" },
        description:
          "Competed in intensive hackathons and built zero-to-one prototypes across AI, Web3, and full-stack systems. Secured 1st Place at Monad Blitz Pune (Penguin Protocol) and shipped functional apps under tight deadlines.",
        skills: ["Rapid Prototyping", "Full-Stack Architecture", "AI Agents", "Smart Contracts", "Team Building"],
      },
    ],
  },
  {
    id: "freelance-dev",
    companyName: "Independent Engineering",
    location: "Remote",
    locationType: "Remote",
    isCurrent: false,
    positions: [
      {
        id: "full-stack-dev",
        title: "Full-Stack & AI Software Developer",
        period: { start: "2023", end: "2024" },
        description:
          "Developed full-stack web applications, REST APIs, and modern frontend interfaces using Next.js, FastAPI, TypeScript, and Tailwind CSS. Integrated LLM APIs and autonomous agents into client workflows.",
        skills: ["TypeScript", "Next.js", "Python", "FastAPI", "Supabase", "UI/UX"],
      },
    ],
  },
];
