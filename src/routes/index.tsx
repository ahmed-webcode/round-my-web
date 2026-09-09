import { createFileRoute } from "@tanstack/react-router";
import ahmedAsset from "@/assets/ahmed.jpg.asset.json";
import { Hero } from "@/components/portfolio/Hero";
import { Banner } from "@/components/portfolio/Experience";
import { HomeOverview } from "@/components/portfolio/HomeOverview";
import { useScrollReveal } from "@/components/portfolio/hooks";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        name: "description",
        content:
          "Ahmed Muhammed Seid (AhmedMS) — Front End Developer & Software Engineer based in Addis Ababa, Ethiopia. Python, Django, React, DevOps, and trilingual collaboration in English, Arabic, and Amharic. Available for hire.",
      },
      {
        name: "keywords",
        content:
          "Ahmed Muhammed Seid, AhmedMS, Ahmed developer Ethiopia, front end developer Ethiopia, front end developer Addis Ababa, React developer Addis Ababa, software developer Addis Ababa, software developer Ethiopia, Python developer Ethiopia, Django developer, React developer Ethiopia, DevOps Ethiopia, Ethiopian software engineer, Ethiopian project manager, Arabic speaking developer, freelance developer Ethiopia, hire developer Addis Ababa, Kheyrukum",
      },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "geo.region", content: "ET-AA" },
      { name: "geo.placename", content: "Addis Ababa" },
      { name: "geo.position", content: "9.03;38.74" },
      { name: "ICBM", content: "9.03, 38.74" },
      {
        property: "og:title",
        content: "Ahmed Muhammed Seid — Front End Developer & Software Engineer in Addis Ababa",
      },
      {
        property: "og:description",
        content:
          "Front End Developer & Software Engineer in Addis Ababa, Ethiopia. Python, Django, React, DevOps. Trilingual (English, Arabic, Amharic).",
      },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: "https://ahmedms.lovable.app/" },
      {
        name: "twitter:title",
        content: "Ahmed Muhammed Seid — Front End Developer & Software Engineer in Addis Ababa",
      },
      {
        name: "twitter:description",
        content:
          "Front End Developer & Software Engineer in Addis Ababa, Ethiopia. Python, Django, React, DevOps. Trilingual (English, Arabic, Amharic).",
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
          jobTitle: "Front End Developer & Software Engineer",
          description:
            "Front End Developer and Software Engineer based in Addis Ababa, Ethiopia. Specializes in Python, Django, React, and DevOps. Trilingual in English, Arabic, and Amharic.",
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
    <>
      <Hero />
      <HomeOverview />
      <Banner />
    </>
  );

}
