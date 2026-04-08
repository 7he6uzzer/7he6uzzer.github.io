import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Ambient background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />
        <div className="absolute right-[5%] top-[60%] h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[140px]" />
        <div className="absolute bottom-[10%] left-[30%] h-[360px] w-[360px] rounded-full bg-primary/[0.04] blur-[140px]" />
      </div>

      <CursorTrailCanvas className="pointer-events-none fixed inset-0 z-40 h-full w-full" />
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
