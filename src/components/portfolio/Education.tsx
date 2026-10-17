import { SectionHeader } from "./SectionHeader";

type EduItem = {
  title: string;
  school: string;
  date: string;
  status: string;
  note?: string;
  featured?: boolean;
};

const EDU: EduItem[] = [
  {
    title: "Master’s in Artificial Intelligence",
    school: "",
    date: "",
    status: "Currently Learning",
    note: "Graduate studies in artificial intelligence, currently in progress.",
    featured: true,
  },
  {
    title: "BS Software Engineering",
    school: "Addis Ababa University",
    date: "Aug 2021 – Aug 2026",
    status: "Graduated",
  },
  {
    title: "BS Arabic Language",
    school: "Addis Ababa University",
    date: "Aug 2021 – Aug 2026",
    status: "Graduated",
  },
];

const LANGS = [
  { glyph: "En", name: "English", level: "Professional Working Proficiency" },
  {
    glyph: "ع",
    name: "Arabic",
    level: "Professional Working Proficiency (Degree-level)",
    rtl: true,
  },
  { glyph: "አ", name: "Amharic", level: "Native" },
];

const CERTS = [
  "Introduction to Software Engineering — Coursera",
  "Introduction to Git and GitHub — Coursera",
  "Supervised Machine Learning — Coursera",
];

export function Education() {
  return (
    <>
      <section id="education" className="relative py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label="Education"
            title="Academic Background"
            subtitle="Technology, language, and ongoing studies in artificial intelligence"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {EDU.map((e) => (
              <div
                key={e.title}
                className={`relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)] ${
                  e.featured ? "sm:col-span-2" : ""
                }`}
              >
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-primary" />
                <div className="mb-2 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <span className="shrink-0 rounded-full border border-primary/30 bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                    {e.status}
                  </span>
                </div>
                {e.school && <p className="mb-1 text-muted-foreground">{e.school}</p>}
                {e.date && <p className="font-mono-x text-sm font-semibold text-primary">
                  {e.date}
                </p>}
                {e.note && <p className="text-sm text-muted-foreground">{e.note}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label="Languages"
            title="Communication Across Cultures"
          />
          <div className="flex flex-wrap justify-center gap-8 sm:gap-14">
            {LANGS.map((l) => (
              <div key={l.name} className="reveal group text-center">
                <div className="relative mx-auto mb-4 grid h-28 w-28 place-items-center rounded-full border-2 border-border bg-card transition-all duration-300 group-hover:scale-105 group-hover:border-transparent">
                  <span className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 [z-index:-1]" />
                  <span
                    className="gradient-text text-4xl font-bold"
                    dir={l.rtl ? "rtl" : "ltr"}
                  >
                    {l.glyph}
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{l.name}</h3>
                <p className="mx-auto mt-1 max-w-[12rem] text-sm text-muted-foreground">
                  {l.level}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeader
            label="Certificates"
            title="Continuous Learning"
            subtitle="Professional development and certifications"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {CERTS.map((c) => (
              <div
                key={c}
                className="reveal flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary">
                  ★
                </span>
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
