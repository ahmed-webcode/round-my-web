import { SectionHeader } from "./SectionHeader";
import { useCountUp } from "./hooks";

const STATS = [
  { target: 2, label: "Degrees Earned" },
  { target: 3, label: "Languages Spoken" },
  { target: 1, label: "Year as PM" },
  { target: 3, label: "Certifications" },
];

function Stat({ target, label }: { target: number; label: string }) {
  const { value, ref } = useCountUp(target);
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[var(--shadow-card)]">
      <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-primary transition-transform duration-300 group-hover:scale-x-100" />
      <span ref={ref} className="gradient-text block text-4xl font-bold">
        {value}
      </span>
      <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative bg-bg-light py-24">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="About Me"
          title="Driven by Code, Guided by Language"
          subtitle="Passionate about building efficient solutions and leading teams"
        />
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="reveal">
            <h3 className="mb-5 text-2xl font-semibold leading-snug">
              Building <span className="gradient-text">scalable solutions</span>{" "}
              with clean code
            </h3>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              I am a highly motivated Software Developer with a strong foundation
              in Python programming and algorithmic problem-solving. My unique
              background combines a BS in Software Engineering with a BS in Arabic
              Language, giving me both deep technical skills and the ability to
              bridge cultural and linguistic gaps in global teams.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              With hands-on experience in code analysis, technical documentation,
              and project management, I excel at writing clean, maintainable code
              and deconstructing complex logic. I thrive in independent, remote
              environments while ensuring accuracy and adherence to best
              practices.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-4">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
