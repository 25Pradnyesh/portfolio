export interface UserData {
  name: string;
  role: string;
  positioning: string;
  status: string;
  statusDescriptor: string;
  location: string;
  university: string;
  email: string;
  calUrl: string;
  profileImage: string;
  timeZone: string;
  bio: string;
  aboutParagraphs: string[];
}

export const USER: UserData = {
  name: "Pradnyesh",
  role: "AI Engineer & Full-Stack Developer",
  positioning:
    "AI Engineer & Full-Stack Developer building AI systems, intelligent products and modern full-stack applications.",
  status: "BUILDING",
  statusDescriptor:
    "Currently building AI systems, intelligent interfaces and full-stack products.",
  location: "Mumbai · Pune, India",
  university: "Savitribai Phule Pune University",
  email: "workspace.pradnyesh@gmail.com",
  calUrl: "https://cal.com/pradnyesh",
  profileImage: "/pfp.jpeg",
  timeZone: "Asia/Kolkata",
  bio: "AI Engineer & Full-Stack Developer building products across AI, full-stack systems and emerging technologies. I turn ambiguous ideas into working software, from hackathon prototypes to production products.",
  aboutParagraphs: [
    "I'm an AI Engineer and Full-Stack Developer focused on building AI systems, intelligent product interfaces, and resilient full-stack applications.",
    "My workflow is centered around rapid execution: taking complex models, APIs, and ideas from zero to shipped software. I frequently compete in hackathons, prototype experimental concepts, and explore new paradigms in developer tooling and AI interactions.",
    "Currently building autonomous workflows, production LLM integrations, and modern web applications with a strong emphasis on clean system design and visual precision.",
  ],
};
