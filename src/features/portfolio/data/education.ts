export interface EducationItemData {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export const EDUCATION: EducationItemData[] = [
  {
    id: "sppu-be",
    institution: "Savitribai Phule Pune University (SPPU)",
    degree: "B.E. — Electronics & Computer Engineering",
    period: "2023 — 2027",
    location: "Pune, India",
  },
  {
    id: "bk-birla-12",
    institution: "B.K. Birla College of Arts, Science & Commerce",
    degree: "Higher Secondary (12th Grade) — Science",
    period: "2021 — 2023",
    location: "Kalyan, India",
  },
];
