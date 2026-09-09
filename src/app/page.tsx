import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import MovingText from "@/components/MovingText";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
import Contributions from "@/components/Contributions";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
      <Navbar />

      <main className="mx-auto md:max-w-3xl px-2 sm:px-4 pt-2">
        {/* Personal Overview */}
        <Overview />

        {/* Moving Text Ticker near Hero */}
        <MovingText />

        {/* Social Links Grid */}
        <SocialLinks />

        {/* About Section */}
        <About />

        {/* GitHub Contributions Activity */}
        <Contributions />

        {/* Technology Stack */}
        <Stack />

        {/* Experience Timeline */}
        <Experience />

        {/* Education Timeline */}
        <Education />

        {/* Projects Editorial List */}
        <Projects />

        {/* Honors & Awards */}
        <Awards />

        {/* Currently Building */}
        <CurrentlyBuilding />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
