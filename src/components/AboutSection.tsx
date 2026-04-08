import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import FadeUp from "@/animation/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { value: "10+", label: "Years in AppSec" },
  { value: "1000+", label: "CVEs Curated" },
  { value: "5+", label: "Ecosystems" },
  { value: "OWASP", label: "Review Board" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-12 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Profile"
          title="About"
          description="Researcher, builder, and program designer working at the intersection of open-source intelligence and enterprise risk."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <FadeUp duration={0.6} delay={0.1}>
            <motion.div
              data-spotlight
              className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-border/70 bg-card px-7 py-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Senior AppSec & Supply-Chain Architect
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  I'm <span className="font-semibold text-foreground">Hariprasad K A</span>, a senior
                  Application Security professional with 10+ years across Software Composition
                  Analysis (SCA), open-source supply-chain security, and AppSec program governance.
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  I translate deep vulnerability intelligence into framework-aligned improvements
                  and executive-ready guidance for enterprise customers.
                </p>
              </div>
            </motion.div>
          </FadeUp>

          <FadeUp duration={0.6} delay={0.2}>
            <motion.div
              data-spotlight
              className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-border/70 bg-card px-7 py-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 text-primary">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  Speaker, Mentor, Builder
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  OWASP Global AppSec Review Board Member, DefCon speaker, and CEH-certified
                  professional. I mentor distributed research teams and design AI-assisted
                  automation workflows for CVE curation at scale.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["AppSec", "SCA", "OSS Security", "Supply-Chain", "DevSecOps"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        <FadeUp duration={0.6} delay={0.3}>
          <div className="mt-8 grid grid-cols-2 gap-4 rounded-2xl border border-border/70 bg-card p-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-3xl font-bold text-gradient-primary sm:text-4xl">
                  {s.value}
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default AboutSection;
