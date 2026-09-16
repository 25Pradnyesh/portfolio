import type { Education } from "@/features/portfolio/types/education"

export const EDUCATION: Education[] = [
  {
    id: "sppu",
    school: "Savitribai Phule Pune University",
    degree: "Bachelor of Engineering (B.E.)",
    fieldOfStudy: "Electronics & Computer Engineering",
    period: {
      start: "2023",
      end: "2027",
    },
    description:
      "Pursuing Bachelor of Engineering in Electronics & Computer Engineering (Expected 2027).",
  },
  {
    id: "bk-birla",
    school: "B.K. Birla College of Arts, Science & Commerce",
    degree: "12th Grade",
    period: {
      start: "2022",
      end: "2023",
    },
    description:
      "Completed higher secondary education in the Science stream, building a strong foundation in mathematics, analytical thinking, and core sciences.",
  },
  {
    id: "skcg-school",
    school: "Smt. Kantaben Chandulal Gandhi English School",
    degree: "10th Grade",
    period: {
      start: "2020",
      end: "2021",
    },
    description:
      "Completed secondary education with a broad academic foundation.",
  },
]
