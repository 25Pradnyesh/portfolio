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

      <main className="mx-auto max-w-[720px]">
        {/* 1. Overview / Hero */}
        <Overview />

        {/* Moving Text Separator */}
        <MovingText />

        {/* 2. Social Links */}
        <SocialLinks />

        {/* 3. About */}
        <About />

        {/* 4. GitHub Contributions */}
        <Contributions />

        {/* 5. Stack */}
        <Stack />

        {/* 6. Experience / Capabilities */}
        <Experience />

        {/* 7. Education */}
        <Education />

        {/* 8. Projects */}
        <Projects />

        {/* 9. Honors & Awards */}
        <Awards />

        {/* 10. Things I'm Exploring */}
        <Interests />

        {/* 11. Contact */}
        <Contact />

        {/* 12. Footer */}
        <Footer />
      </main>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
