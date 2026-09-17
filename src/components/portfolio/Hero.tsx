import { Link } from "@tanstack/react-router";
import { Send, Briefcase, Code2, Languages, Container } from "lucide-react";
import { useTyping } from "./hooks";
const ahmedAsset = { url: "/ahmed.jpg" };

const BADGES = [
  { icon: Code2, label: "Python Expert" },
  { icon: Briefcase, label: "Front End Developer" },
  { icon: Languages, label: "Trilingual" },
  { icon: Container, label: "DevOps" },
];

export function Hero() {
  const typed = useTyping([
    "Software Developer",
    "Front End Developer",
    "Backend Engineer",
    "Arabic Linguist",
  ]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pb-16 pt-28 sm:pt-32">
      {/* floating blobs */}
      <div className="anim-blob pointer-events-none absolute -right-24 -top-24 z-0 h-80 w-80 rounded-full bg-primary/30 blur-[90px]" />
      <div className="anim-blob pointer-events-none absolute -bottom-16 -left-24 z-0 h-72 w-72 rounded-full bg-accent/30 blur-[90px] [animation-delay:2s]" />
      <div className="anim-blob pointer-events-none absolute left-1/2 top-1/2 z-0 h-56 w-56 rounded-full bg-secondary/20 blur-[90px] [animation-delay:4s]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Circular photo */}
        <div className="mx-auto mb-8 w-fit [animation:fadeInUp_0.8s_ease_forwards]">
          <div className="anim-float relative mx-auto grid place-items-center">
            <div className="anim-ring-spin absolute inset-0 rounded-full bg-gradient-tri opacity-70 blur-[2px]" />
            <div className="relative rounded-full bg-background p-1.5">
              <img
                src={ahmedAsset.url}
                alt="Ahmed Muhammed Seid"
                width={168}
                height={168}
                fetchPriority="high"
                decoding="async"
                className="h-36 w-36 rounded-full object-cover object-top shadow-[var(--shadow-glow)] sm:h-44 sm:w-44"
              />
            </div>
          </div>
        </div>

        <p className="font-mono-x mb-4 text-sm text-primary opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.15s]">
          Hello, I am
        </p>
        <h1 className="mb-5 text-4xl font-bold leading-[1.1] opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.3s] sm:text-6xl">
          Ahmed <span className="gradient-text">Muhammed</span> Seid
          <span className="mt-3 block text-lg font-semibold text-muted-foreground sm:text-2xl">
            Front End Developer &amp; Software Engineer
          </span>
        </h1>
        <div className="font-mono-x mb-7 flex min-h-8 items-center justify-center text-base text-muted-foreground opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.45s] sm:text-xl">
          <span className="anim-blink border-r-[3px] border-primary pr-1">
            {typed}
          </span>
        </div>
        <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-muted-foreground opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.6s]">
          Software Engineer with a rare combination of technical expertise and
          Arabic language fluency, enabling cross-cultural collaboration and
          access to Arabic-speaking markets.
        </p>

        <div className="mb-9 flex flex-wrap justify-center gap-2.5 opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.75s]">
          {BADGES.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-medium text-primary transition-transform hover:-translate-y-0.5 sm:text-sm"
            >
              <Icon size={15} /> {label}
            </span>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-3 opacity-0 [animation:fadeInUp_0.8s_ease_forwards_0.9s] sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            <Send size={18} /> Get In Touch
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Briefcase size={18} /> View My Work
          </Link>
        </div>
      </div>

    </section>
  );
}
