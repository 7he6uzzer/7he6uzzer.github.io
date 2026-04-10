import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Globe, Github, ArrowDown, ShieldCheck } from "lucide-react";
import FadeUp from "@/animation/FadeUp";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-12 sm:px-14 md:px-20"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg" />
      {/* Soft gradient orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* LEFT: Text content */}
        <div>
          <FadeUp duration={0.6}>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              7he6uzzer
            </motion.div>
          </FadeUp>

          <FadeUp duration={0.7} delay={0.15}>
            <h1 className="text-5xl font-bold leading-[0.95] tracking-tight text-gradient sm:text-6xl md:text-7xl">
              Hariprasad K A
            </h1>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.25}>
            <h2 className="mt-5 flex flex-wrap items-center gap-3 text-lg font-medium text-muted-foreground sm:text-xl md:text-2xl">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <span>
                Senior <span className="text-gradient-primary font-semibold">Application Security</span> &{" "}
                <span className="text-gradient-primary font-semibold">Supply-Chain</span> Architect
              </span>
            </h2>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.35}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              10+ years shaping enterprise AppSec programs through{" "}
              <span className="font-semibold text-foreground">Software Composition Analysis</span>,{" "}
              <span className="font-semibold text-foreground">OSS supply-chain intelligence</span>, and{" "}
              <span className="font-semibold text-foreground">DevSecOps governance</span>.
            </p>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <button
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-br from-primary to-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                <span>View Key Contributions</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </button>
              <a
                href="mailto:hariprasad.ka@hotmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-background"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
            </div>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.55}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <a
                href="mailto:hariprasad.ka@hotmail.com"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4" /> hariprasad.ka@hotmail.com
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> +91 97452 62669
              </span>
              <a
                href="https://linkedin.com/in/hariprasad-ka"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/7he6uzzer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://hilinecreators.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Globe className="h-4 w-4" /> hilinecreators.com
              </a>
            </div>
          </FadeUp>
        </div>

        {/* RIGHT: Portrait */}
        <FadeUp duration={0.7} delay={0.3}>
          <motion.div
            style={{ y: scrollY * -0.08 }}
            className="relative mx-auto w-full max-w-sm"
          >
            {/* Animated gradient ring */}
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-primary via-accent to-primary opacity-70 blur-md animate-[spin_8s_linear_infinite]" style={{ backgroundSize: "200% 200%" }} />
            {/* Glow */}
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40 blur-3xl opacity-60" />

            {/* Portrait frame */}
            <motion.div
              whileHover={{ scale: 1.02, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-2xl shadow-primary/20"
            >
              <img
                src="/profile.svg"
                alt="Hariprasad K A"
                className="aspect-square w-full object-cover"
              />
              {/* Scanline overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(0,240,255,0.15) 0px, rgba(0,240,255,0.15) 1px, transparent 1px, transparent 4px)",
                }}
              />
              {/* Corner HUD brackets */}
              <div className="pointer-events-none absolute inset-3">
                <div className="absolute left-0 top-0 h-5 w-5 border-l-2 border-t-2 border-primary" />
                <div className="absolute right-0 top-0 h-5 w-5 border-r-2 border-t-2 border-primary" />
                <div className="absolute bottom-0 left-0 h-5 w-5 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 h-5 w-5 border-b-2 border-r-2 border-primary" />
              </div>
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/90 px-4 py-2 shadow-lg backdrop-blur-md"
            >
              <ShieldCheck className="h-4 w-4 text-primary" />
              <span className="text-xs font-semibold text-foreground">OWASP Review Board</span>
            </motion.div>

            {/* Floating tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -right-4 -top-4 flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 shadow-lg backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold text-primary">10+ yrs</span>
            </motion.div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
};

export default HeroSection;
