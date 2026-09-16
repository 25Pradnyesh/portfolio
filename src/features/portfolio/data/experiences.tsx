import { CodeXmlIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "independent-builder",
    companyName: "Independent & Hackathon Engineering",
    companyIcon: <CodeXmlIcon />,
    companyWebsite: "https://github.com/25Pradnyesh",
    location: "Mumbai · Pune, India",
    locationType: "Remote",
    positions: [
      {
        id: "1",
        title: "ML Engineer & Full-Stack Developer",
        employmentPeriod: {
          start: "01.2024",
        },
        employmentType: "Independent",
        icon: <CodeXmlIcon />,
        description: `- Architect and ship full-stack AI-driven applications, intelligent agent pipelines, and modern web platforms.
- Compete in rapid-turnaround hackathons, turning complex model APIs and real-time audio synthesis into working software prototypes.
- Design responsive, high-performance interfaces with Next.js, React, Tailwind CSS, and Motion.
- Develop reliable backend APIs and microservices using Python, FastAPI, Node.js, and PostgreSQL.`,
        skills: [
          "TypeScript",
          "Python",
          "Next.js",
          "FastAPI",
          "React",
          "Machine Learning",
          "Tailwind CSS",
          "PostgreSQL",
          "Supabase",
          "Docker",
          "Git",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
