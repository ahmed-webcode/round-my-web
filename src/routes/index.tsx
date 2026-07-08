import { createFileRoute } from "@tanstack/react-router";
import ahmedAsset from "@/assets/ahmed.jpg.asset.json";
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
        name: "description",
        content:
          "Ahmed Muhammed Seid — Software Developer & Project Manager. Python, Django, DevOps, and trilingual collaboration in English, Arabic, and Amharic.",
      },
      {
        property: "og:title",
        content: "Ahmed Muhammed Seid — Software Developer & Project Manager",
      },
      {
        property: "og:description",
        content:
          "Software Developer & Project Manager. Python, Django, DevOps, trilingual (English, Arabic, Amharic).",
      },
      { property: "og:url", content: "https://ahmedms.lovable.app/" },
      {
        name: "twitter:title",
        content: "Ahmed Muhammed Seid — Software Developer & Project Manager",
      },
      {
        name: "twitter:description",
        content:
          "Software Developer & Project Manager. Python, Django, DevOps, trilingual (English, Arabic, Amharic).",
      },
    ],
    links: [
      { rel: "canonical", href: "https://ahmedms.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        href: ahmedAsset.url,
        fetchPriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ahmed Muhammed Seid",
          jobTitle: "Software Developer & Project Manager",
          url: "https://ahmedms.lovable.app/",
          email: "mailto:ahmedmuh543@gmail.com",
          telephone: "+251920928989",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressCountry: "Ethiopia",
          },
          knowsLanguage: ["English", "Arabic", "Amharic"],
          knowsAbout: ["Python", "Django", "DevOps", "Project Management"],
        }),
      },
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
