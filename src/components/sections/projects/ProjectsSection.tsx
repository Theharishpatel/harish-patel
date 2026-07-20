import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

import { ProjectsGrid } from "./ProjectsGrid";

export function ProjectsSection() {
  return (
    <Section
      id="projects"
      className="py-20 lg:py-28"
    >
      <Container>
        <SectionHeading
          badge="Portfolio"
          title="Featured Projects"
          description="A selection of projects showcasing my expertise in frontend development, scalable architecture, and modern web technologies."
        />

        <div className="mt-16">
          <ProjectsGrid />
        </div>
      </Container>
    </Section>
  );
}