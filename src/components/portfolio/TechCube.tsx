const FACES = [
  { cls: "cube-front", label: "Python", bg: "rgba(233,69,96,0.12)" },
  { cls: "cube-back", label: "JavaScript", bg: "rgba(120,80,200,0.14)" },
  { cls: "cube-right", label: "Django", bg: "rgba(80,110,200,0.14)" },
  { cls: "cube-left", label: "Docker", bg: "rgba(233,69,96,0.1)" },
  { cls: "cube-top", label: "Linux", bg: "rgba(120,80,200,0.12)" },
  { cls: "cube-bottom", label: "MySQL", bg: "rgba(80,110,200,0.1)" },
];

export function TechCube() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-14 px-5 sm:px-8 md:flex-row md:gap-20">
        <div className="reveal max-w-lg text-center md:text-left">
          <h3 className="mb-4 text-2xl font-semibold sm:text-3xl">
            My <span className="gradient-text">Tech Stack</span> in 3D
          </h3>
          <p className="mb-4 leading-relaxed text-muted-foreground">
            I work across the full stack, from backend APIs to server
            infrastructure. This cube represents the core technologies I use to
            build scalable, production-ready applications.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Watch it rotate to see the tools that power my development workflow.
          </p>
        </div>

        <div className="reveal shrink-0 [perspective:1000px]" aria-hidden="true">
          <div
            className="anim-cube relative h-[200px] w-[200px] sm:h-[240px] sm:w-[240px]"
            style={{ transformStyle: "preserve-3d" }}
          >
            {FACES.map((f) => (
              <CubeFace key={f.cls} cls={f.cls} label={f.label} bg={f.bg} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CubeFace({ cls, label, bg }: { cls: string; label: string; bg: string }) {
  const half = "clamp(100px, 12vw, 120px)";
  const transforms: Record<string, string> = {
    "cube-front": `translateZ(${half})`,
    "cube-back": `rotateY(180deg) translateZ(${half})`,
    "cube-right": `rotateY(90deg) translateZ(${half})`,
    "cube-left": `rotateY(-90deg) translateZ(${half})`,
    "cube-top": `rotateX(90deg) translateZ(${half})`,
    "cube-bottom": `rotateX(-90deg) translateZ(${half})`,
  };
  return (
    <div
      className="absolute grid h-[200px] w-[200px] place-items-center rounded-xl border-2 border-primary/30 sm:h-[240px] sm:w-[240px]"
      style={{ transform: transforms[cls], background: bg }}
    >
      <span className="font-mono-x text-lg font-medium text-foreground">
        {label}
      </span>
    </div>
  );
}
