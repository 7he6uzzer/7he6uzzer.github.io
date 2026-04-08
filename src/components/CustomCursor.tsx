import { useEffect, useRef, useState } from "react";

/**
 * Custom arrow cursor.
 * - Hides on touch devices.
 * - Scales / changes color when hovering interactive elements.
 * - Drives [data-spotlight] elements via --mx / --my CSS vars.
 */
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("custom-cursor-on");
    let currentSpotlight: HTMLElement | null = null;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: target.x, y: target.y };
    let raf = 0;

    const tick = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;

      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;

      // Spotlight handoff
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

      // Hover state
      const interactive = !!el?.closest("a, button, [data-cursor]");
      setHovering((prev) => (prev !== interactive ? interactive : prev));
    };

    const onLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = "1";
    };
    const onDown = () => cursorRef.current?.classList.add("cursor-arrow--down");
    const onUp = () => cursorRef.current?.classList.remove("cursor-arrow--down");

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.classList.remove("custom-cursor-on");
      currentSpotlight?.removeAttribute("data-spotlight-active");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`cursor-arrow pointer-events-none fixed left-0 top-0 z-[100] ${
        hovering ? "cursor-arrow--hover" : ""
      }`}
      style={{ transition: "opacity 0.2s" }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 2 L3 17 L7.2 13.2 L9.8 19 L12.4 17.8 L9.8 12 L15.5 12 Z"
          fill="hsl(var(--primary))"
          stroke="hsl(var(--background))"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CustomCursor;
