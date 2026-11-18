import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { LinkedinIcon, TelegramIcon } from "./BrandIcons";
import { SectionHeader } from "./SectionHeader";

const FACTS = [
  { label: "Based in", value: "Addis Ababa, Ethiopia" },
  { label: "Focus", value: "Front End Development" },
  { label: "Languages", value: "English · العربية · አማርኛ" },
  { label: "Availability", value: "Freelance · Contract · Full-time" },
];

const STACK = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Next.js",
  "Python",
  "Django",
  "Node.js",
  "MySQL",
  "Docker",
  "Linux",
];

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@ahmedms.dev",
    href: "mailto:contact@ahmedms.dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+251 920 928 989",
    href: "tel:+251920928989",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    value: "@Amsa899",
    href: "https://telegram.me/Amsa899",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Ahmed Muhammed Seid",
    href: "https://www.linkedin.com/in/ahmed-muhammed-seid-983138309",
  },
];

export function HomeOverview() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/10 blur-[110px]" />
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="At a glance"
          title="Who I Am & How to Reach Me"
          subtitle="A quick snapshot before you dive into the full portfolio"
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Facts */}
          <div className="reveal rounded-2xl border border-border bg-card p-7">
            <h3 className="mb-5 text-lg font-semibold">Quick facts</h3>
            <dl className="space-y-4">
              {FACTS.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono-x text-xs uppercase tracking-[0.18em] text-primary">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Stack + story */}
          <div className="reveal rounded-2xl border border-border bg-card p-7">
            <h3 className="mb-3 text-lg font-semibold">What I do</h3>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              I build fast, accessible and good-looking interfaces — from brand
              landing pages to full portals with real users behind them. I also
              handle the delivery side: scoping, coordinating stakeholders and
              shipping on time.
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="reveal rounded-2xl border border-border bg-card p-7">
            <h3 className="mb-5 text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-xl border border-border/70 px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-primary/50"
                  >
                    <Icon size={18} className="shrink-0 text-primary" />
                    <span className="min-w-0">
                      <span className="block text-xs text-dim">{label}</span>
                      <span className="block truncate text-sm font-medium">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin size={14} className="text-primary" /> Addis Ababa, Ethiopia
              <span className="mx-1 text-dim">•</span>
              <Clock size={14} className="text-primary" /> Replies within 24h
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5"
          >
            See my projects <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-7 py-3.5 font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
          >
            <Mail size={18} /> Start a conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
