import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import FadeUp from "@/animation/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const projects = [
  {
    index: 0,
    title: "SCA Vulnerability Intelligence",
    description:
      "Designed high-fidelity processes for affected-version mapping, intro/fix commit identification, and remediation boundaries — significantly reducing false positives and noisy findings in enterprise SCA products.",
    tags: ["SCA", "CVE Analysis", "Risk Prioritization", "Veracode"],
  },
  {
    index: 1,
    title: "AI-Assisted CVE Curation Pipeline",
    description:
      "Designed AI-assisted, human-in-the-loop automation workflows (Python + orchestration frameworks) to scale CVE ingestion, validation, and curation while preserving research accuracy and auditability.",
    tags: ["Python", "AI/ML", "Automation", "DevSecOps"],
  },
  {
    index: 2,
    title: "Supply-Chain Threat Detection",
    description:
      "Investigated supply-chain attacks including typosquatting, dependency confusion, and malicious package campaigns across npm, PyPI, and Maven ecosystems. De-obfuscated malicious JavaScript and Python packages.",
    tags: ["npm", "PyPI", "Maven", "Threat Intelligence"],
  },
  {
    index: 3,
    title: "SBOM & OSS Risk Governance",
    description:
      "Contributed to SBOM and supply-chain security initiatives using SPDX and CycloneDX standards. Partnered with product groups to ensure research aligns with secure SDLC outcomes and policy-driven governance.",
    tags: ["SBOM", "SPDX", "CycloneDX", "OWASP", "NIST"],
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-12 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Selected Work"
          title="Key Contributions"
          description="A snapshot of the initiatives where research, automation, and governance came together to move the needle for enterprise customers."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <FadeUp key={project.title} duration={0.5} delay={project.index * 0.08}>
              <motion.div
                data-spotlight
                data-cursor
                layoutId={`project-card-${project.index}`}
                onClick={() => setSelectedProject(project.index)}
                className="group relative flex h-full flex-col justify-center cursor-pointer overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="font-heading text-5xl font-bold text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.4)]">
                      0{project.index + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-rotate-45" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 px-6 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`project-card-${selectedProject}`}
                className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="relative">
                  <span className="font-heading text-6xl font-bold text-transparent [-webkit-text-stroke:1px_hsl(var(--primary)/0.5)]">
                    0{selectedProject + 1}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground sm:text-3xl">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {projects[selectedProject].description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {projects[selectedProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
