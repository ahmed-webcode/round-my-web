import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/portfolio/Experience";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Experience — Ahmed Muhammed Seid, Project Manager Ethiopia";
const DESC =
  "Ahmed Muhammed Seid's experience: Intern Frontend Developer at KIFIYA Financial Technologies since September 2026 and Project Manager for Addis Ababa University's Fleet Management System.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.lovable.app/experience" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.lovable.app/experience" }],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  useScrollReveal();
  return (
    <div className="pt-20">
      <Experience />
    </div>
  );
}
