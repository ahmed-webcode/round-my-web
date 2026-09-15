import { createFileRoute } from "@tanstack/react-router";
import { Experience } from "@/components/portfolio/Experience";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Experience — Ahmed Muhammed Seid, Project Manager Ethiopia";
const DESC =
  "Professional experience of Ahmed Muhammed Seid, including leading the Fleet Management System project at Addis Ababa University.";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
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
