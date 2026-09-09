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
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-[768px] px-0">
        {/* Profile / Hero Overview */}
        <Overview />

        {/* Moving Text Ticker */}
        <MovingText />

        {/* Social Links Grid */}
        <SocialLinks />

        {/* About Section */}
        <About />

        {/* GitHub Contributions */}
        <Contributions />

        {/* Stack / Technologies */}
        <Stack />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />

        {/* Projects */}
        <Projects />

        {/* Honors & Awards */}
        <Awards />

        {/* Interests / Exploring */}
        <Interests />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
