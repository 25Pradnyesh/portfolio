export interface ConnectionItem {
  id: string;
  label: string;
  handle: string;
  href: string;
  type: "brand" | "system";
  iconName: "x" | "github" | "linkedin" | "cal" | "discord" | "telegram" | "email" | "resume";
}

export const CONNECTIONS: ConnectionItem[] = [
  // Row 1
  {
    id: "x",
    label: "X",
    handle: "@Pradnyesh_25",
    href: "https://x.com/Pradnyesh_25",
    type: "brand",
    iconName: "x",
  },
  {
    id: "github",
    label: "GitHub",
    handle: "25Pradnyesh",
    href: "https://github.com/25Pradnyesh",
    type: "brand",
    iconName: "github",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "pradnyesh-s",
    href: "https://www.linkedin.com/in/pradnyesh-s/",
    type: "brand",
    iconName: "linkedin",
  },
  {
    id: "cal",
    label: "Cal.com",
    handle: "pradnyesh",
    href: "https://cal.com/pradnyesh",
    type: "brand",
    iconName: "cal",
  },
  // Row 2
  {
    id: "discord",
    label: "Discord",
    handle: "1397630514554212554",
    href: "https://discord.com/users/1397630514554212554",
    type: "brand",
    iconName: "discord",
  },
  {
    id: "telegram",
    label: "Telegram",
    handle: "Pradnyesh_25",
    href: "https://t.me/Pradnyesh_25",
    type: "brand",
    iconName: "telegram",
  },
  {
    id: "email",
    label: "Email",
    handle: "workspace.pradnyesh@gmail.com",
    href: "mailto:workspace.pradnyesh@gmail.com",
    type: "system",
    iconName: "email",
  },
  {
    id: "resume",
    label: "Resume",
    handle: "resume.pdf",
    href: "/resume.pdf",
    type: "system",
    iconName: "resume",
  },
];
