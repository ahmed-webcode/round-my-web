import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandingIntroPath, brandingIntroUrl, brandingIntroMp4Path, brandingIntroMp4Url, brandingLogoUrl } from "@/lib/branding-assets";

export function Preloader() {
  const [phase, setPhase] = useState<"playing" | "leaving" | "done">("playing");
  const [started, setStarted] = useState(false);
  const [source, setSource] = useState<string>();
  const [mp4Source, setMp4Source] = useState<string>();
  const finish = useCallback(() => {
    setPhase((current) => current === "playing" ? "leaving" : current);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    const host = window.location.hostname;
    setSource(host === "localhost" || host.endsWith(".lovable.app") ? brandingIntroPath : brandingIntroUrl);
    setMp4Source(host === "localhost" || host.endsWith(".lovable.app") ? brandingIntroMp4Path : brandingIntroMp4Url);
    const timeout = window.setTimeout(finish, 7000);
    return () => window.clearTimeout(timeout);
  }, [finish]);

  useEffect(() => {
    if (phase !== "leaving") return;
    const timeout = window.setTimeout(() => setPhase("done"), 550);
    return () => window.clearTimeout(timeout);
  }, [phase]);

  useEffect(() => {
    if (phase === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [phase]);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-label="Opening Ahmed Muhammed Seid's portfolio"
      className={`brand-intro fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-intro-background transition-opacity duration-500 ${phase === "leaving" ? "pointer-events-none opacity-0" : "opacity-100"}`}
    >
      <img
        src={brandingLogoUrl}
        alt=""
        aria-hidden="true"
        className={`absolute w-56 max-w-[70%] object-contain transition-opacity duration-300 ${started ? "opacity-0" : "opacity-100"}`}
      />
      {source && <video
        autoPlay
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
        aria-hidden="true"
        onPlaying={() => setStarted(true)}
        onEnded={finish}
        onError={finish}
        className={`brand-intro-animation pointer-events-none w-full max-w-6xl object-contain transition-opacity duration-300 ${started ? "opacity-100" : "opacity-0"}`}
      >
        <source src={source} type="video/webm" />
        <source src={mp4Source} type="video/mp4" />
      </video>}
      <Button
        variant="ghost"
        size="icon"
        onClick={finish}
        title="Skip opening animation"
        aria-label="Skip opening animation"
        className="absolute bottom-8 right-6 text-primary hover:bg-primary/10 hover:text-primary"
      >
        <ArrowRight size={20} />
      </Button>
    </div>
  );
}