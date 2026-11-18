import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { TechCube } from "@/components/portfolio/TechCube";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "About Ahmed Muhammed Seid — Developer & PM in Addis Ababa";
const DESC =
  "Get to know Ahmed Muhammed Seid: software engineer and project manager in Addis Ababa, Ethiopia, trilingual in English, Arabic and Amharic.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.dev/about" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.dev/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  useScrollReveal();
  return (
    <div className="pt-20">
      <About />
      <TechCube />
    </div>
  );
}
