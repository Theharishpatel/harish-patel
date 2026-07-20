import { Navbar } from "@/components/navigation/Navbar";
import { AboutSection } from "@/components/sections/about";
import { HeroSection } from "@/components/sections/hero/HeroSection";
import { StatsSection } from "@/components/sections/stats";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
      </main>
    </>
  );
}