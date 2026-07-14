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
import { Chatbot } from "@/components/portfolio/Chatbot";
import { useScrollReveal } from "@/components/portfolio/hooks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Ahmed Muhammed Seid (AhmedMS) — Software Developer & Project Manager based in Addis Ababa, Ethiopia. Python, Django, React, DevOps, and trilingual collaboration in English, Arabic, and Amharic. Available for hire.",
      },
      {
        name: "keywords",
        content:
          "Ahmed Muhammed Seid, AhmedMS, Ahmed developer Ethiopia, project manager Ethiopia, project manager Addis Ababa, software developer Addis Ababa, software developer Ethiopia, Python developer Ethiopia, Django developer, React developer Ethiopia, DevOps Ethiopia, Ethiopian software engineer, Ethiopian project manager, Arabic speaking developer, freelance developer Ethiopia, hire developer Addis Ababa, Kheyrukum",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "geo.region", content: "ET-AA" },
      { name: "geo.placename", content: "Addis Ababa" },
      { name: "geo.position", content: "9.03;38.74" },
      { name: "ICBM", content: "9.03, 38.74" },
      {
        property: "og:title",
        content: "Ahmed Muhammed Seid — Software Developer & Project Manager in Addis Ababa",
      },
      {
        property: "og:description",
        content:
          "Software Developer & Project Manager in Addis Ababa, Ethiopia. Python, Django, React, DevOps. Trilingual (English, Arabic, Amharic).",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://ahmedms.lovable.app/" },
      {
        name: "twitter:title",
        content: "Ahmed Muhammed Seid — Software Developer & Project Manager in Addis Ababa",
      },
      {
        name: "twitter:description",
        content:
          "Software Developer & Project Manager in Addis Ababa, Ethiopia. Python, Django, React, DevOps. Trilingual (English, Arabic, Amharic).",
      },
    ],
    links: [
      { rel: "canonical", href: "https://ahmedms.lovable.app/" },
      {
        rel: "preload",
        as: "image",
        href: ahmedAsset.url,
        fetchpriority: "high",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Ahmed Muhammed Seid",
          alternateName: ["AhmedMS", "Ahmed MS", "Ahmed Muhammed", "Ahmed Seid"],
          jobTitle: "Software Developer & Project Manager",
          description:
            "Software Developer and Project Manager based in Addis Ababa, Ethiopia. Specializes in Python, Django, React, and DevOps. Trilingual in English, Arabic, and Amharic.",
          url: "https://ahmedms.lovable.app/",
          image: `https://ahmedms.lovable.app${ahmedAsset.url}`,
          email: "mailto:ahmedmuh543@gmail.com",
          telephone: "+251920928989",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Addis Ababa",
            addressRegion: "Addis Ababa",
            addressCountry: "Ethiopia",
          },
          workLocation: {
            "@type": "Place",
            name: "Addis Ababa, Ethiopia",
          },
          nationality: { "@type": "Country", name: "Ethiopia" },
          knowsLanguage: ["English", "Arabic", "Amharic"],
          knowsAbout: [
            "Python",
            "Django",
            "React",
            "Node.js",
            "DevOps",
            "Project Management",
            "Software Engineering",
            "Backend Development",
            "Full-Stack Development",
          ],
          sameAs: [
            "https://github.com/ahmed-webcode",
            "https://www.linkedin.com/in/ahmed-muhammed-seid-983138309",
            "https://telegram.me/Amsa899",
          ],
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
      <Chatbot />
    </div>
  );
}
