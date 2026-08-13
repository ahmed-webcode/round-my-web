import type { ReactNode } from "react";
import { ParticleField } from "./ParticleField";
import { Nav } from "./Nav";
import { Footer } from "./Contact";
import { Chatbot } from "./Chatbot";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <ParticleField />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
      <Chatbot />
    </div>
  );
}
