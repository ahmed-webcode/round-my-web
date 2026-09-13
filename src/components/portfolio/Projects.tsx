import { useEffect, useRef, useState } from "react";
import { ArrowDown, ExternalLink, Truck } from "lucide-react";
const kheyrukumAsset = { url: "/projects/kheyrukum.png" };
const kheyrukumPortalAsset = { url: "/projects/kheyrukum-portal.png" };
const sanidAsset = { url: "/projects/sanid.png" };
const hoaAsset = { url: "/projects/hoaglobalagro.png" };
const mooncakesAsset = { url: "/projects/mooncakes.png" };
const mosqikilAsset = { url: "/projects/mosqikil.png" };
const cbeAsset = { url: "/projects/cbehero.png" };

const PROJECTS = [
  {
    icon: Truck,
    image: null as string | null,
    gradient: "var(--gradient-primary)",
    ambient: ["oklch(0.55 0.19 265)", "oklch(0.6 0.2 300)"],
    tags: ["React", "Node.js", "MySQL", "PM"],
    title: "Fleet Management System",
    desc: "A complete digital transformation of AAU's transport division. Automated vehicle tracking, maintenance alerts, fuel optimization, and data-driven reporting. Delivered on time and within budget.",
    link: null,
  },
  {
    icon: null,
    image: kheyrukumAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.45 0.15 300), oklch(0.4 0.12 265))",
    ambient: ["oklch(0.5 0.17 300)", "oklch(0.45 0.14 265)"],
    tags: ["Web", "Design", "Branding"],
    title: "Kheyrukum",
    desc: "Designed and built kheyrukum.com — a website to show the world that we exist. A polished digital presence that tells the story of Kheyrukum and puts it on the map.",
    link: "https://kheyrukum.com",
  },
  {
    icon: null,
    image: kheyrukumPortalAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.4 0.12 265), oklch(0.65 0.2 12))",
    ambient: ["oklch(0.45 0.13 160)", "oklch(0.4 0.1 265)"],
    tags: ["Portal", "Education", "Real-time"],
    title: "Kheyrukum Portal",
    desc: "Built kheyrukumportal.vercel.app — a portal where teachers and parents meet to track students' learning patterns, progress, and daily behavior in a single collaborative dashboard.",
    link: "https://kheyrukumportal.vercel.app",
  },
  {
    icon: null,
    image: sanidAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.32 0.06 150), oklch(0.6 0.12 85))",
    ambient: ["oklch(0.42 0.09 150)", "oklch(0.62 0.13 85)"],
    tags: ["Non-profit", "Bilingual", "Frontend"],
    title: "Sanid Islamic Development Center",
    desc: "A bilingual site for SIDC, a registered Ethiopian non-profit — strategic pillars, governance, media gallery and partnership calls presented in a warm green-and-gold identity.",
    link: "https://sanid-sable.vercel.app/",
  },
  {
    icon: null,
    image: hoaAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.3 0.05 160), oklch(0.72 0.14 85))",
    ambient: ["oklch(0.4 0.08 160)", "oklch(0.7 0.14 85)"],
    tags: ["Corporate", "Agribusiness", "Frontend"],
    title: "HOA Agriproducts",
    desc: "A corporate landing experience for an East African animal-nutrition distributor — editorial typography, full-bleed imagery and a clear partnership funnel.",
    link: "https://hoaglobalagro.vercel.app/",
  },
  {
    icon: null,
    image: mooncakesAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.25 0 0), oklch(0.55 0.02 260))",
    ambient: ["oklch(0.45 0.01 260)", "oklch(0.3 0.01 260)"],
    tags: ["Brand", "Dark mode", "Motion"],
    title: "Moon Cakes",
    desc: "A moody, cinematic brand site for a bakery — full-screen moon hero, gallery, menu and a light/dark toggle, built for atmosphere first.",
    link: "https://mooncakes.lovable.app/",
  },
  {
    icon: null,
    image: mosqikilAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.2 0.02 170), oklch(0.62 0.15 165))",
    ambient: ["oklch(0.6 0.15 165)", "oklch(0.35 0.06 190)"],
    tags: ["Product", "3D", "Landing"],
    title: "MOSQIKIL Pro",
    desc: "A product launch page for a next-gen mosquito repellent device — spec highlights, animated 3D architecture sections and a direct order path.",
    link: "https://mosqikil-3.vercel.app/",
  },
  {
    icon: null,
    image: cbeAsset.url,
    gradient: "linear-gradient(135deg, oklch(0.35 0.15 330), oklch(0.7 0.13 85))",
    ambient: ["oklch(0.5 0.19 330)", "oklch(0.68 0.13 85)"],
    tags: ["Fintech", "Animation", "Concept"],
    title: "CBE Hero",
    desc: "A concept experience for Commercial Bank of Ethiopia — an animated coin hero with sound, legacy storytelling and a CBE Birr portal entry point.",
    link: "https://cbe-hero.vercel.app/",
  },
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const total = PROJECTS.length;
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("projects-scroll");
    return () => root.classList.remove("projects-scroll");
  }, []);

  useEffect(() => {
    const sections = sectionRefs.current.filter((section): section is HTMLElement => Boolean(section));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const nextIndex = Number((visible.target as HTMLElement).dataset.projectIndex);
        if (Number.isNaN(nextIndex)) return;
        setIndex(nextIndex);
        window.dispatchEvent(
          new CustomEvent("project-world-change", { detail: { index: nextIndex } }),
        );
      },
      { threshold: [0.35, 0.55, 0.75] },
    );

    sections.forEach((section) => observer.observe(section));
    window.dispatchEvent(new CustomEvent("project-world-change", { detail: { index: 0 } }));
    return () => observer.disconnect();
  }, []);

  const goToProject = (projectIndex: number) => {
    sectionRefs.current[projectIndex]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div id="projects" className="relative z-10">
      {PROJECTS.map((project, projectIndex) => {
        const Icon = project.icon;
        const active = projectIndex === index;
        return (
          <section
            key={project.title}
            ref={(node) => {
              sectionRefs.current[projectIndex] = node;
            }}
            data-project-index={projectIndex}
            className="project-scene flex min-h-[100svh] snap-start items-center px-5 pb-14 pt-28 sm:px-8 sm:pt-32"
          >
            <div
              className={`mx-auto grid w-full max-w-6xl items-end gap-10 transition-all duration-700 ease-out md:grid-cols-[minmax(0,1fr)_minmax(300px,0.7fr)] ${
                active ? "translate-y-0 opacity-100" : "translate-y-10 opacity-40"
              }`}
            >
              <div className="max-w-3xl">
                <p className="font-mono-x mb-5 text-xs uppercase text-project-muted">
                  {String(projectIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </p>
                <div className="mb-5 flex flex-wrap gap-x-5 gap-y-2 border-l border-project-line pl-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="font-mono-x text-[11px] uppercase text-project-muted">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="max-w-4xl text-5xl font-bold leading-[0.98] text-project-foreground sm:text-7xl lg:text-8xl">
                  {project.title}
                </h1>
              </div>

              <div className="border-t border-project-line pt-6 md:mb-2">
                <p className="text-base leading-relaxed text-project-muted sm:text-lg">{project.desc}</p>
                <div className="mt-7 flex items-center gap-5">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-project-line bg-project-surface px-5 py-3 text-sm font-semibold text-project-foreground backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-project-foreground hover:bg-project-foreground hover:text-project-inverse"
                    >
                      Visit Site <ExternalLink size={16} />
                    </a>
                  )}
                  {!project.image && Icon && (
                    <span className="grid h-12 w-12 place-items-center border border-project-line bg-project-surface text-project-foreground backdrop-blur-md">
                      <Icon size={22} />
                    </span>
                  )}
                </div>
              </div>
            </div>

            {projectIndex === 0 && (
              <button
                type="button"
                onClick={() => goToProject(1)}
                className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-project-muted transition-colors hover:text-project-foreground sm:flex"
              >
                <span className="font-mono-x text-[10px] uppercase">Scroll to explore</span>
                <ArrowDown size={17} className="animate-bounce" />
              </button>
            )}
          </section>
        );
      })}

      <nav
        aria-label="Project progress"
        className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 sm:flex lg:right-8"
      >
        {PROJECTS.map((project, projectIndex) => (
          <button
            key={project.title}
            type="button"
            aria-label={`Go to ${project.title}`}
            aria-current={projectIndex === index ? "step" : undefined}
            onClick={() => goToProject(projectIndex)}
            className={`relative h-10 w-px bg-project-line transition-colors after:absolute after:inset-x-[-7px] after:inset-y-0 after:content-[''] ${
              projectIndex === index ? "bg-project-foreground" : "hover:bg-project-muted"
            }`}
          />
        ))}
      </nav>
    </div>
  );
}

export const PROJECT_BACKGROUNDS = PROJECTS.map((project) => ({
  image: project.image,
  gradient: project.gradient,
  title: project.title,
}));
