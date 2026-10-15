import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/portfolio/Projects";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Projects — Ahmed Muhammed Seid | Fleet System & Kheyrukum";
const DESC =
  "Featured work by Ahmed Muhammed Seid: AAU Fleet Management System, kheyrukum.com and the Kheyrukum family portal for teachers and parents.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.lovable.app/projects" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.lovable.app/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  useScrollReveal();
  return (
    <div>
      <Projects />
    </div>
  );
}
