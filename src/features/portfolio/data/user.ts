import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Pradnyesh",
  lastName: "",
  displayName: "Pradnyesh",
  username: "25Pradnyesh",
  gender: "male",
  pronouns: "he/him",
  bio: "ML Engineer & Full-Stack Developer building AI-powered products, intelligent systems, and modern full-stack applications.",
  flipSentences: [
    "AI Engineer",
    "Product Engineer",
    "AI Systems Builder",
    "Building AI-powered products",
    "Trying to provide value & using code to do so.",
  ],
  address: "Mumbai · Pune, India",
  phoneNumberB64: "", // Omitted
  emailB64: "d29ya3NwYWNlLnByYWRueWVzaEBnbWFpbC5jb20=", // base64 for workspace.pradnyesh@gmail.com
  website: "https://cal.com/pradnyesh",
  jobTitle: "ML Engineer & Full-Stack Developer",
  jobs: [
    {
      title: "ML Engineer & Full-Stack Developer",
      company: "Independent & Hackathon Engineering",
      website: "https://github.com/25Pradnyesh",
      experienceId: "independent-builder",
    },
  ],
  about: `- I’m Pradnyesh — an ML Engineer and Full-Stack Developer focused on building AI-powered products, autonomous systems, and robust web applications.
- My work spans the intersection of machine learning, system design, and product engineering: translating complex models, APIs, and emergent ideas into shipped, reliable software.
- From building rapid prototypes under hackathon constraints to architecting full-stack applications with Next.js, Python, and modern AI APIs, I care about clean engineering, pragmatic architecture, and visual precision.
`,
  avatar: "/pfp.jpeg",
  avatarVariants: {
    lightOff: "/pfp.jpeg",
    lightOn: "/pfp.jpeg",
    darkOff: "/pfp.jpeg",
    darkOn: "/pfp.jpeg",
  },
  ogImage: "/pfp.jpeg",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Pradnyesh",
    "ML Engineer",
    "Full-Stack Developer",
    "AI Engineer",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "Machine Learning",
  ],
  dateCreated: "2024-01-01",
}
