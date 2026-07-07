import { Code2, Server, Database, Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const SKILLS = [
  { icon: Code2, title: "Languages", tags: ["Python", "Java", "JavaScript", "PHP"] },
  { icon: Server, title: "Backend", tags: ["Django", "Node.js", "NestJS", "Express.js"] },
  { icon: Database, title: "Databases & DevOps", tags: ["MySQL", "Git", "Docker", "Bash"] },
  {
    icon: Terminal,
    title: "Linux & Servers",
    tags: ["Ubuntu", "CentOS", "Apache", "Nginx", "SSH", "Cron"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-bg-light py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="Skills"
          title="Technical Arsenal"
          subtitle="Tools and technologies I work with daily"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map(({ icon: Icon, title, tags }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-2 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
            >
              <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100" />
              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-white shadow-[var(--shadow-glow)]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-border bg-white/5 px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/15 hover:text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
