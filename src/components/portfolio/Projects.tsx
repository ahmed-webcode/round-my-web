import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Truck, Code, Bot } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { GithubIcon } from "./BrandIcons";

const PROJECTS = [
  {
    icon: Truck,
    gradient: "var(--gradient-primary)",
    tags: ["React", "Node.js", "MySQL", "PM"],
    title: "Fleet Management System",
    desc: "A complete digital transformation of AAU's transport division. Automated vehicle tracking, maintenance alerts, fuel optimization, and data-driven reporting. Delivered on time and within budget.",
  },
  {
    icon: Code,
    gradient: "linear-gradient(135deg, oklch(0.45 0.15 300), oklch(0.4 0.12 265))",
    tags: ["Python", "API", "REST", "Backend"],
    title: "API Development Suite",
    desc: "Built scalable REST APIs handling 500+ daily requests with Django REST Framework. Implemented authentication, rate limiting, and comprehensive API documentation.",
  },
  {
    icon: Bot,
    gradient: "linear-gradient(135deg, oklch(0.4 0.12 265), oklch(0.65 0.2 12))",
    tags: ["ML", "Python", "Data", "AI"],
    title: "ML Classification Model",
    desc: "Supervised machine learning project implementing regression and classification algorithms. Trained on real datasets with feature engineering and model optimization.",
  },
];

export function Projects() {
  const [index, setIndex] = useState(0);
  const total = PROJECTS.length;
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24">
      <SectionHeader
        label="Projects"
        title="Featured Work"
        subtitle="Projects I have built and managed"
      />
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="overflow-hidden rounded-3xl">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {PROJECTS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="w-full shrink-0">
                  <div className="grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
                    <div
                      className="grid min-h-[200px] place-items-center p-10"
                      style={{ background: p.gradient }}
                    >
                      <Icon size={80} className="anim-float text-white" />
                    </div>
                    <div className="flex flex-col justify-center p-8">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {p.desc}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-light px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <GithubIcon size={16} /> View Code
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-light px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => go(-1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to project ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-primary" : "w-2.5 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => go(1)}
            className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
