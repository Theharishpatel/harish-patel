import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="py-20 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <AboutImage />

          {/* Right */}
          <AboutContent />
        </div>
      </Container>
    </Section>
  );
}