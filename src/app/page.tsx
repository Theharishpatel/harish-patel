import { Navbar } from "@/components/layout/navigation/Navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact/ContactSection";
import { ExperienceSection } from "@/components/sections/experience/ExperienceSection";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { ProjectsSection } from "@/components/sections/projects";
import { StatsSection } from "@/components/sections/stats";
import { TechStackSection } from "@/components/sections/tech_stacks";
import { Contact } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <TechStackSection />
        <ContactSection />
      </main>
    </>
  );
}