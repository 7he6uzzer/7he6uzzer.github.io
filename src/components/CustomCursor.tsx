import { useEffect } from "react";

/**
 * Drives [data-spotlight] elements via --mx / --my CSS vars.
 * The native OS cursor is used; no custom cursor rendering.
 */
const CustomCursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    let currentSpotlight: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      const spot = el?.closest<HTMLElement>("[data-spotlight]") || null;
      if (spot !== currentSpotlight) {
        currentSpotlight?.removeAttribute("data-spotlight-active");
        currentSpotlight = spot;
        currentSpotlight?.setAttribute("data-spotlight-active", "");
      }
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      currentSpotlight?.removeAttribute("data-spotlight-active");
    };
  }, []);

  return null;
};

export default CustomCursor;
