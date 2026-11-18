import { createFileRoute } from "@tanstack/react-router";
import { Skills } from "@/components/portfolio/Skills";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Skills — Python, Django, React & DevOps | Ahmed Muhammed Seid";
const DESC =
  "Technical skills of Ahmed Muhammed Seid: Python, Java, JavaScript, Django, Node.js, NestJS, MySQL, Docker, Linux servers and project management.";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.dev/skills" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.dev/skills" }],
  }),
  component: SkillsPage,
});

function SkillsPage() {
  useScrollReveal();
  return (
    <div className="pt-20">
      <Skills />
    </div>
  );
}
