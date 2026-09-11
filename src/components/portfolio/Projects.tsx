import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Truck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import kheyrukumAsset from "@/assets/kheyrukum.png.asset.json";
import kheyrukumPortalAsset from "@/assets/kheyrukum-portal.png.asset.json";
import sanidAsset from "@/assets/sanid.png.asset.json";
import hoaAsset from "@/assets/hoaglobalagro.png.asset.json";
import mooncakesAsset from "@/assets/mooncakes.png.asset.json";
import mosqikilAsset from "@/assets/mosqikil.png.asset.json";
import cbeAsset from "@/assets/cbehero.png.asset.json";

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
  const go = (dir: number) => setIndex((i) => (i + dir + total) % total);
  const active = PROJECTS[index];

  return (
    <section id="projects" className="relative overflow-hidden bg-background py-24">
      {/* project-aware ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(60% 60% at 20% 20%, ${active.ambient[0]}55, transparent 70%), radial-gradient(60% 60% at 85% 80%, ${active.ambient[1]}45, transparent 70%)`,
        }}
      />
      <div className="relative z-10">
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
                    <div className="grid overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-sm md:grid-cols-2">
                      <div
                        className="grid place-items-center overflow-hidden p-5 sm:p-7"
                        style={{ background: p.gradient }}
                      >
                        {p.image ? (
                          <figure className="w-full overflow-hidden rounded-xl border border-white/15 shadow-2xl ring-1 ring-black/20">
                            <div className="flex items-center gap-1.5 bg-black/50 px-3 py-2">
                              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                            </div>
                            <img
                              src={p.image}
                              alt={`${p.title} website preview`}
                              loading="lazy"
                              decoding="async"
                              className="aspect-[16/10] w-full bg-black object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.04]"
                            />
                          </figure>
                        ) : Icon ? (
                          <Icon size={80} className="anim-float min-h-[200px] text-white" />
                        ) : null}
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
                        {p.link && (
                          <div className="flex flex-wrap gap-3">
                            <a
                              href={p.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg border border-border bg-bg-light px-4 py-2 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary hover:text-primary-foreground"
                            >
                              <ExternalLink size={16} /> Visit Site
                            </a>
                          </div>
                        )}
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
            <div className="flex flex-wrap justify-center gap-2">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  aria-label={`Go to ${p.title}`}
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
      </div>
    </section>
  );
}
