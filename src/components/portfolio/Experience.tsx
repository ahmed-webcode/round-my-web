import { Briefcase, CalendarDays, MapPin, TrendingUp, ShieldCheck, Clock, FileText } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const HIGHLIGHTS = [
  "Spearheaded the digital transformation of AAU's transport division, replacing manual logging with an automated Fleet Management System",
  "Improved fleet utilization and reduced unauthorized vehicle use through data-driven reporting",
  "Managed maintenance alert integration, reducing vehicle downtime and extending asset lifecycles",
  "Delivered the project within budget and deadline while managing stakeholder expectations across departments",
  "Established support documentation and SOPs for long-term system sustainability",
];

const OUTCOMES = [
  { icon: TrendingUp, title: "Higher fleet utilization", text: "Data-driven reporting exposed idle assets and misuse." },
  { icon: ShieldCheck, title: "Less unauthorized use", text: "Every trip logged, approved and traceable end to end." },
  { icon: Clock, title: "Reduced downtime", text: "Maintenance alerts scheduled service before failures." },
  { icon: FileText, title: "Lasting handover", text: "SOPs and documentation kept the system sustainable." },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="My career in software development and project management"
        />

        <article className="reveal relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-10">
          <span className="absolute inset-x-0 top-0 h-1 bg-gradient-primary" />
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start">
            <div className="flex min-w-0 items-start gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
                <Briefcase className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                <h3 className="text-2xl font-semibold sm:text-3xl">Project Manager</h3>
                <p className="mt-1 text-sm text-muted-foreground sm:text-base">
                  Addis Ababa University — Fleet Management System
                </p>
                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-dim sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5" /> Addis Ababa, Ethiopia
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" /> 1 year
                  </span>
                </div>
              </div>
            </div>
            <span className="font-mono-x w-fit shrink-0 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
              Feb 2025 – Feb 2026
            </span>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="relative rounded-xl border border-border bg-background/40 p-4 pl-9 text-sm leading-relaxed text-muted-foreground"
              >
                <span className="absolute left-4 top-4 font-bold text-primary">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-16">
          <SectionHeader label="Impact" title="What the work delivered" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {OUTCOMES.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="reveal rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h4 className="mb-1 text-base font-semibold">{title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
