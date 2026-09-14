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
              className={`absolute inset-0 transition-[opacity,transform,filter] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:transition-none ${
                projectIndex === activeProject
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-110 opacity-0 blur-md"
              }`}
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover object-top brightness-[0.62] saturate-[1.15]"
                  loading={projectIndex === 0 ? "eager" : "lazy"}
                  decoding="async"
                />
              ) : (
                <div className="h-full w-full" style={{ background: project.gradient }} />
              )}
            </div>
          ))}
          {PROJECT_BACKGROUNDS.map((project, projectIndex) => (
            <div
              key={`glow-${project.title}`}
              className={`absolute inset-0 mix-blend-screen transition-opacity duration-[1200ms] ease-out ${
                projectIndex === activeProject ? "opacity-45" : "opacity-0"
              }`}
              style={{
                background: `radial-gradient(90% 70% at 15% 85%, ${project.ambient[0]} 0%, transparent 62%), radial-gradient(70% 60% at 90% 10%, ${project.ambient[1]} 0%, transparent 60%)`,
              }}
            />
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
