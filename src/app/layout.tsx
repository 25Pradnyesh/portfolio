import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pradnyesh.dev"),
  title: "Pradnyesh — AI Engineer & Full-Stack Developer",
  description:
    "AI Engineer & Full-Stack Developer building AI systems, intelligent products and modern full-stack applications.",
  keywords: [
    "Pradnyesh",
    "AI Engineer",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "LLMs",
    "Web3",
  ],
  authors: [{ name: "Pradnyesh", url: "https://github.com/25Pradnyesh" }],
  creator: "Pradnyesh",
  openGraph: {
    title: "Pradnyesh — AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer & Full-Stack Developer building AI systems, intelligent products and modern full-stack applications.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/pfp.jpeg",
        width: 1200,
        height: 1200,
        alt: "Pradnyesh — AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pradnyesh — AI Engineer & Full-Stack Developer",
    description:
      "AI Engineer & Full-Stack Developer building AI systems, intelligent products and modern full-stack applications.",
    creator: "@Pradnyesh_25",
    images: ["/pfp.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body suppressHydrationWarning className="min-h-screen antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
