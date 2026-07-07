import { Mail, Phone, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, TelegramIcon, XIcon } from "./BrandIcons";

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X", href: "#" },
  { icon: TelegramIcon, label: "Telegram", href: "#" },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-bg-light py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="font-mono-x mb-3 inline-block text-xs uppercase tracking-[0.25em] text-primary">
          Contact
        </span>
        <h2 className="text-3xl font-bold sm:text-4xl">Let us Work Together</h2>
        <p className="mx-auto mb-10 mt-3 max-w-lg leading-relaxed text-muted-foreground">
          I am currently open to new opportunities in software development and
          project management. Whether you have a question or just want to say hi,
          feel free to reach out.
        </p>

        <div className="mb-10 flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
          <a
            href="mailto:ahmedmuh543@gmail.com"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <Mail size={20} className="text-primary group-hover:text-white" />
            ahmedmuh543@gmail.com
          </a>
          <a
            href="tel:+251920928989"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <Phone size={20} className="text-primary group-hover:text-white" />
            +251 920 928 989
          </a>
          <span className="inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium">
            <MapPin size={20} className="text-primary" />
            Addis Ababa, Ethiopia
          </span>
        </div>

        <div className="flex justify-center gap-4">
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              title={label}
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-card text-muted-foreground transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-white"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-8 text-center">
      <p className="text-sm text-dim">
        © 2026 Ahmed Muhammed Seid. Built with{" "}
        <span className="anim-heartbeat text-primary">♥</span> and code.
      </p>
    </footer>
  );
}
