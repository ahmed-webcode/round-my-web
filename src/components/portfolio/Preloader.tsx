import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { brandingIntroUrl, brandingLogoUrl } from "@/lib/branding-assets";

export function Preloader() {
  const [phase, setPhase] = useState<"playing" | "leaving" | "done">("playing");
  const [started, setStarted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finish = useCallback(() => {
    setPhase((current) => current === "playing" ? "leaving" : current);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPhase("done");
      return;
    }
    const timeout = window.setTimeout(finish, 7000);
    videoRef.current?.play().catch(finish);
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
      <video
        ref={videoRef}
        src={brandingIntroUrl}
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
        className={`brand-intro-animation pointer-events-none w-[120%] max-w-none object-contain transition-opacity duration-300 sm:w-full sm:max-w-6xl ${started ? "opacity-100" : "opacity-0"}`}
      />
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