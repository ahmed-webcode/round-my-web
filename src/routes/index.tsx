import { createFileRoute } from "@tanstack/react-router";
import { ParticleField } from "@/components/portfolio/ParticleField";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { TechCube } from "@/components/portfolio/TechCube";
import { Banner, Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { useScrollReveal } from "@/components/portfolio/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ahmed Muhammed Seid | Software Developer & Project Manager",
      },
      {
        name: "description",
        content:
          "Ahmed Muhammed Seid — Software Developer and Project Manager with dual degrees in Software Engineering and Arabic Language. Python, Django, DevOps, and cross-cultural collaboration.",
      },
      {
        property: "og:title",
        content: "Ahmed Muhammed Seid | Software Developer & Project Manager",
      },
      {
        property: "og:description",
        content:
          "Software Developer & Project Manager. Python, Django, DevOps, trilingual (English, Arabic, Amharic).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="relative">
      <ParticleField />
      <div className="relative z-10">
        <Nav />
        <main>
          <Hero />
          <About />
          <TechCube />
          <Banner />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
