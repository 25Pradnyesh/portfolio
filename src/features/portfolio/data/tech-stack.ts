export interface TechItem {
  id: string;
  name: string;
  category?: string;
  accentColor?: string;
}

export const TECH_STACK: TechItem[] = [
  // Row 1 (15 items)
  { id: "python", name: "Python", accentColor: "#3776AB" },
  { id: "javascript", name: "JavaScript", accentColor: "#F7DF1E" },
  { id: "typescript", name: "TypeScript", accentColor: "#3178C6" },
  { id: "cpp", name: "C++", accentColor: "#00599C" },
  { id: "java", name: "Java", accentColor: "#EA2D2E" },
  { id: "react", name: "React", accentColor: "#61DAFB" },
  { id: "nextjs", name: "Next.js", accentColor: "#FFFFFF" },
  { id: "tailwind", name: "Tailwind CSS", accentColor: "#06B6D4" },
  { id: "nodejs", name: "Node.js", accentColor: "#5FA04E" },
  { id: "fastapi", name: "FastAPI", accentColor: "#059669" },
  { id: "sql", name: "SQL", accentColor: "#336791" },
  { id: "supabase", name: "Supabase", accentColor: "#3ECF8E" },
  { id: "git", name: "Git", accentColor: "#F05032" },
  { id: "github", name: "GitHub", accentColor: "#FFFFFF" },
  { id: "vscode", name: "VS Code", accentColor: "#007ACC" },

  // Row 2 (15 items)
  { id: "docker", name: "Docker", accentColor: "#2496ED" },
  { id: "figma", name: "Figma", accentColor: "#F24E1E" },
  { id: "claude", name: "Claude", accentColor: "#D97706" },
  { id: "chatgpt", name: "ChatGPT", accentColor: "#10A37F" },
  { id: "gemini", name: "Gemini", accentColor: "#4E75F6" },
  { id: "grok", name: "Grok", accentColor: "#FFFFFF" },
  { id: "perplexity", name: "Perplexity", accentColor: "#20808D" },
  { id: "huggingface", name: "Hugging Face", accentColor: "#FFD21E" },
  { id: "nvidia", name: "NVIDIA", accentColor: "#76B900" },
  { id: "cursor", name: "Cursor", accentColor: "#FFFFFF" },
  { id: "antigravity", name: "Antigravity", accentColor: "#3186FF" },
  { id: "motion", name: "Motion", accentColor: "#FF0055" },
  { id: "radix", name: "Radix UI", accentColor: "#161618" },
  { id: "baseui", name: "Base UI", accentColor: "#007FFF" },
  { id: "shadcn", name: "shadcn/ui", accentColor: "#FFFFFF" },
];
