import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const navItems = ["Home", "Skills", "Projects", "About", "Experience"];

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((i) => i.toLowerCase());
    const onScroll = () => {
      const y = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= y) {
          setActive(navItems[i]);
          return;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <div
        className={`flex items-center gap-1 rounded-full border px-2 py-1.5 transition-all duration-300 ${
          scrolled
            ? "border-border/60 bg-background/70 shadow-lg shadow-primary/5 backdrop-blur-xl"
            : "border-border/40 bg-background/40 backdrop-blur-md"
        }`}
      >
        <div className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === item
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {active === item && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent shadow-md shadow-primary/20"
                  transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{item}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 sm:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className={`relative px-2.5 py-1.5 rounded-full text-xs font-medium transition-colors ${
                active === item ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mx-1 h-6 w-px bg-border/60" />
        <button
          onClick={() => setIsDark(!isDark)}
          className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="Toggle theme"
        >
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </motion.div>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
