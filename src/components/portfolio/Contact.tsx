import { Mail, Phone, MapPin } from "lucide-react";
import { LinkedinIcon, TelegramIcon } from "./BrandIcons";

const SOCIALS = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahmed-muhammed-seid-983138309",
  },
  {
    icon: TelegramIcon,
    label: "Telegram",
    href: "https://telegram.me/Amsa899",
  },
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
            href="mailto:contact@ahmedms.dev"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <Mail size={20} className="text-primary group-hover:text-white" />
            contact@ahmedms.dev
          </a>
          <a
            href="tel:+251920928989"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <Phone size={20} className="text-primary group-hover:text-white" />
            +251 920 928 989
          </a>
          <a
            href="https://telegram.me/Amsa899"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-border bg-card px-6 py-4 font-medium transition-all hover:-translate-y-1 hover:border-transparent hover:bg-gradient-primary hover:text-primary-foreground"
          >
            <TelegramIcon size={20} className="text-primary group-hover:text-white" />
            @Amsa899
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
              target="_blank"
              rel="noopener noreferrer"
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

export function Footer({ immersive = false }: { immersive?: boolean }) {
  return (
    <footer
      className={`relative z-20 border-t py-8 text-center backdrop-blur-sm ${immersive ? "snap-end border-project-line bg-project-surface" : "border-border bg-background"}`}
    >
      <p className={`text-sm ${immersive ? "text-project-muted" : "text-dim"}`}>© 2026 Ahmed Muhammed Seid</p>
    </footer>
  );
}
