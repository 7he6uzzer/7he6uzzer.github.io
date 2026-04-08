import { motion } from "framer-motion";
import FadeUp from "@/animation/FadeUp";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const experiences = [
  {
    company: "Veracode (via AccionLabs)",
    location: "Remote",
    period: "Aug 2023 – Present",
    role: "Security Research Lead – Software Supply Chain Security",
    description:
      "Lead security research for Veracode's SCA platform, shaping how OSS vulnerability intelligence informs enterprise AppSec and DevSecOps programs. Designed high-fidelity processes for affected-version mapping, intro/fix commit identification, and remediation boundaries. Act as final decision authority for complex vulnerability disputes.",
  },
  {
    company: "Sonatype & Socket.dev (via LoginSoft)",
    location: "Remote",
    period: "Nov 2018 – Jul 2023",
    role: "Senior Security Researcher – OSS & Software Supply Chain Security",
    description:
      "Contributed to commercial OSS vulnerability intelligence and software supply-chain threat detection engines. Investigated supply-chain attacks including typosquatting, dependency confusion, and malicious package campaigns across npm, PyPI, and Maven. De-obfuscated malicious JavaScript and Python packages.",
  },
  {
    company: "StoAmigo / Axel",
    location: "Direct Contract",
    period: "May 2015 – Mar 2018",
    role: "Security QA Lead (Application Security & VAPT)",
    description:
      "Led application security testing for web and mobile applications aligned with OWASP Top 10 and secure SDLC practices. Automated security test workflows using Python, integrating checks into CI/CD pipelines.",
  },
  {
    company: "ATEES Industrial Training",
    location: "Kerala, India",
    period: "Jul 2014 – Apr 2015",
    role: "Python Developer",
    description:
      "Developed backend automation scripts and web applications using Python. Delivered hands-on technical training in Python/Django based web and application software development.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-12 sm:px-14 md:px-20">
      <div className="relative mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Career"
          title="Experience"
          description="A decade of building, researching, and leading at the intersection of security and engineering."
        />

        <div className="relative">
          <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-6" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, index) => (
              <FadeUp key={exp.company} duration={0.5} delay={index * 0.1}>
                <div className="relative pl-14 md:pl-20">
                  <div className="absolute left-3 top-6 flex h-5 w-5 items-center justify-center md:left-4">
                    <span className="absolute h-5 w-5 animate-ping rounded-full bg-primary/30" />
                    <span className="relative h-3 w-3 rounded-full border-2 border-primary bg-background" />
                  </div>

                  <motion.div
                    data-spotlight
                    className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-5 shadow-sm transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-accent/10 text-primary">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-heading text-lg font-semibold text-foreground">
                              {exp.company}
                            </h3>
                            <div className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </div>
                      </div>
                      <div className="mb-3 inline-block rounded-md bg-primary/5 px-2 py-1 text-sm font-semibold text-primary">
                        {exp.role}
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
