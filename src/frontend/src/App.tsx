import { Achievements } from "./components/portfolio/Achievements";
import { Certifications } from "./components/portfolio/Certifications";
import { Experience } from "./components/portfolio/Experience";
import { Footer } from "./components/portfolio/Footer";
import { Hero } from "./components/portfolio/Hero";
import { Navbar } from "./components/portfolio/Navbar";
import { Projects } from "./components/portfolio/Projects";
import { Skills } from "./components/portfolio/Skills";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Achievements />
      </main>
      <Footer />
    </div>
  );
}
