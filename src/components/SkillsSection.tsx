import { motion } from "framer-motion";
import {
  Layers,
  Code2,
  Boxes,
  Wrench,
  GitBranch,
  Award,
} from "lucide-react";
import FadeUp from "@/animation/FadeUp";
import SectionHeader from "@/components/SectionHeader";

const skillCategories = [
  {
    title: "Domains",
    icon: Layers,
    skills: ["Application Security", "OSS Security", "Software Supply-Chain Risk", "DevSecOps"],
  },
  {
    title: "Languages & Automation",
    icon: Code2,
    skills: ["Python (Expert)", "Java", "JavaScript", "SQL"],
  },
  {
    title: "Ecosystems",
    icon: Boxes,
    skills: ["Maven/Gradle", "npm", "PyPI", "NuGet", "Go Modules"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["SonarQube", "Burp Suite", "OWASP ZAP", "Snyk", "Checkmarx", "Semgrep", "GitHub Advanced Security"],
  },
  {
    title: "Practices",
    icon: GitBranch,
    skills: ["Secure SDLC", "CI/CD Security Integration", "Threat Modeling", "DevSecOps Collaboration"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: ["CEH v9", "NASSCOM Level 7 – AppSec Analyst", "OWASP Review Board Member"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-12 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Capabilities"
          title="Skills & Certifications"
          description="A focused toolkit honed across a decade of OSS vulnerability research, supply-chain investigations, and enterprise AppSec program leadership."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <FadeUp key={category.title} duration={0.5} delay={idx * 0.06}>
                <motion.div
                  data-spotlight
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="relative">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-base font-semibold uppercase tracking-wider text-foreground">
                      {category.title}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-lg border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
