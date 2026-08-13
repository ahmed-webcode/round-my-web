import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/portfolio/Contact";
import { useScrollReveal } from "@/components/portfolio/hooks";

const TITLE = "Contact Ahmed Muhammed Seid — Hire a Developer in Addis Ababa";
const DESC =
  "Get in touch with Ahmed Muhammed Seid by email, phone or Telegram. Available for freelance, contract and full-time work from Addis Ababa, Ethiopia.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "https://ahmedms.lovable.app/contact" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://ahmedms.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  useScrollReveal();
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
