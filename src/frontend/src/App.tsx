import { Achievements } from "./components/portfolio/Achievements";
import { Certifications } from "./components/portfolio/Certifications";
import { Experience } from "./components/portfolio/Experience";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";
import { Projects } from "./components/portfolio/Projects";
import { SectionDivider } from "./components/portfolio/SectionDivider";
import { Skills } from "./components/portfolio/Skills";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg, #0B1220 0%, #0F1A2B 100%)",
      }}
    >
      {/* Main panel */}
      <div
        className="max-w-[1100px] mx-auto my-4 sm:my-8 rounded-2xl overflow-hidden"
        style={{
          background: "oklch(0.125 0.026 255)",
          boxShadow:
            "0 0 0 1px oklch(0.24 0.038 250), 0 8px 48px oklch(0.06 0.02 255 / 0.7), inset 0 1px 0 oklch(0.30 0.04 255 / 0.3)",
        }}
      >
        <Navbar />

        <main>
          <Hero />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <Achievements />
        </main>

        <Footer />
      </div>
    </div>
  );
}
