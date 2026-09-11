import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
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
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <main className="max-w-screen overflow-x-hidden px-2">
        <div className="mx-auto max-w-3xl">
          {/* Hero / Overview / Profile / Info */}
          <Overview />

          {/* Social Links Grid */}
          <SocialLinks />

          {/* About */}
          <About />

          {/* GitHub Contributions */}
          <Contributions />

          {/* Stack */}
          <Stack />

          {/* Experience */}
          <Experience />

          {/* Education */}
          <Education />

          {/* Projects */}
          <Projects />

          {/* Honors & Awards */}
          <Awards />

          {/* Things I'm Exploring */}
          <Interests />

          {/* Contact */}
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      </main>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
