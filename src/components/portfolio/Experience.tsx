import { SectionHeader } from "./SectionHeader";

export function Banner() {
  return (
    <section className="relative flex h-[50vh] min-h-[340px] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10" />
      <div className="anim-blob pointer-events-none absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-primary/25 blur-[70px]" />
      <div className="anim-blob pointer-events-none absolute right-[15%] top-[35%] h-56 w-56 rounded-full bg-accent/25 blur-[70px] [animation-delay:3s]" />
      <div className="relative z-10 px-5 text-center">
        <h2 className="gradient-text mb-3 text-3xl font-extrabold sm:text-5xl">
          Engineering Philosophy
        </h2>
        <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg">
          Every line of code is a step toward innovation. I turn complex problems
          into elegant, scalable solutions.
        </p>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Experience"
          title="Professional Journey"
          subtitle="My career in software development and project management"
        />
        <div className="relative mx-auto max-w-3xl">
          <span className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="reveal relative">
            <span className="anim-pulse-dot absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-primary bg-background md:left-1/2" />
            <div className="ml-12 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)] md:ml-0 md:w-[calc(50%-2.5rem)]">
              <span className="font-mono-x mb-3 inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                Feb 2025 – Feb 2026
              </span>
              <h3 className="text-xl font-semibold">Project Manager</h3>
              <h4 className="mb-4 text-sm font-medium text-muted-foreground">
                Addis Ababa University — Fleet Management System
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Spearheaded the digital transformation of AAU's transport division, replacing manual logging with an automated Fleet Management System",
                  "Improved fleet utilization and reduced unauthorized vehicle use through data-driven reporting",
                  "Managed maintenance alert integration, reducing vehicle downtime and extending asset lifecycles",
                  "Delivered the project within budget and deadline while managing stakeholder expectations across departments",
                  "Established support documentation and SOPs for long-term system sustainability",
                ].map((item) => (
                  <li key={item} className="relative pl-5 leading-relaxed">
                    <span className="absolute left-0 font-bold text-primary">
                      ▸
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
