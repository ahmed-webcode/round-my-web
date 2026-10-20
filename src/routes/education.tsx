import { createFileRoute } from "@tanstack/react-router";
import { Education } from "@/components/portfolio/Education";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Education & Languages — Ahmed Muhammed Seid";
const DESC =
  "Ahmed Muhammed Seid is currently pursuing a master's in Artificial Intelligence and an MA in Project Management, with a BS in Software Engineering and a BA in Arabic Language and Communication from Addis Ababa University.";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.lovable.app/education" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.lovable.app/education" }],
  }),
  component: EducationPage,
});

function EducationPage() {
  useScrollReveal();
  return (
    <div className="pt-20">
      <Education />
    </div>
  );
}
