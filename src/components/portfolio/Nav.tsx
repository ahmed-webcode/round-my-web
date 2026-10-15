import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandingLogoUrl } from "@/lib/branding-assets";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/education", label: "Education" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav({ immersive = false }: { immersive?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled && !immersive
          ? "border-b border-border bg-background/85 py-3 backdrop-blur-xl"
          : immersive
            ? "py-5 text-project-foreground"
            : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" aria-label="Ahmed Muhammed Seid — Home" className="flex h-14 w-24 shrink-0 items-center sm:w-28">
          <img src={brandingLogoUrl} alt="Ahmed Muhammed Seid logo" className="h-full w-full object-contain" width={112} height={62} fetchPriority="high" />
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                 className={`nav-link group relative py-1 text-sm font-medium transition-colors ${immersive ? "text-project-muted hover:text-project-foreground" : "text-muted-foreground hover:text-foreground"}`}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: `nav-active font-semibold ${immersive ? "text-project-foreground" : "text-foreground"}`,
                  "aria-current": "page",
                }}
              >
                {l.label}
                <span className="nav-underline absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
             className={`hidden rounded-lg border px-5 py-2 text-sm font-semibold transition-colors sm:inline-block ${immersive ? "border-project-line bg-project-surface text-project-foreground backdrop-blur-md hover:bg-project-foreground hover:text-project-inverse" : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"}`}
          >
            Hire Me
          </Link>
          <Button
            variant="outline"
            size="icon"
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
             className={`grid h-10 w-10 place-items-center rounded-lg border lg:hidden ${immersive ? "border-project-line bg-project-surface text-project-foreground backdrop-blur-md" : "border-border text-foreground"}`}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          open ? "max-h-[calc(100dvh-6rem)] overflow-y-auto border-b" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{
                  className: "bg-card font-semibold text-foreground border-l-2 border-primary",
                  "aria-current": "page",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-gradient-primary px-3 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              Hire Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
