import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/separator";
import { ProfileHero } from "@/features/portfolio/components/profile-hero";
import { Overview } from "@/features/portfolio/components/overview";
import { Connections } from "@/features/portfolio/components/connections";
import { About } from "@/features/portfolio/components/about";
import { TechStack } from "@/features/portfolio/components/tech-stack";
import { Experiences } from "@/features/portfolio/components/experiences";
import { Education } from "@/features/portfolio/components/education";
import { Projects } from "@/features/portfolio/components/projects";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen bg-background">
      <SiteHeader />

      <main className="max-w-screen overflow-x-clip px-2 pb-8">
        <div className="mx-auto md:max-w-3xl">
          {/* Hero / Identity */}
          <ProfileHero />
          <Separator />

          {/* Metadata & 4x2 Connections */}
          <Overview />
          <Connections />
          <Separator />

          {/* About */}
          <About />
          <Separator />

          {/* Tech Stack (Continuous Logo Wall) */}
          <TechStack />
          <Separator />

          {/* Experience */}
          <Experiences />
          <Separator />

          {/* Education */}
          <Education />
          <Separator />

          {/* Projects */}
          <Projects />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
