import { useLocation } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ParticleField } from "./ParticleField";
import { Nav } from "./Nav";
import { Footer } from "./Contact";
import { Chatbot } from "./Chatbot";
import { PROJECT_BACKGROUNDS } from "./Projects";

export function SiteLayout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const immersive = location.pathname === "/projects";
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    if (!immersive) return;
    const onProjectChange = (event: Event) => {
      const detail = (event as CustomEvent<{ index?: number }>).detail;
      if (typeof detail?.index === "number") setActiveProject(detail.index);
    };
    window.addEventListener("project-world-change", onProjectChange);
    return () => window.removeEventListener("project-world-change", onProjectChange);
  }, [immersive]);

  return (
    <div className={`relative ${immersive ? "bg-project-fallback" : ""}`}>
      {!immersive && <ParticleField />}
      {immersive && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          {PROJECT_BACKGROUNDS.map((project, projectIndex) => (
            <div
              key={project.title}
              className={`absolute inset-0 transition-[opacity,transform] duration-1000 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                projectIndex === activeProject ? "scale-100 opacity-100" : "scale-105 opacity-0"
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  loading={projectIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ) : (
                <div className="h-full w-full" style={{ background: project.gradient }} />
              )}
            </div>
          ))}
          <div className="absolute inset-0 bg-project-veil" />
          <div className="absolute inset-x-0 top-0 h-40 bg-project-nav-fade" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-project-footer-fade" />
        </div>
      )}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav immersive={immersive} />
        <main className="flex-1">{children}</main>
        <Footer immersive={immersive} />
      </div>
      <Chatbot />
    </div>
  );
}
