import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { experiences } from "@/data/experience";

import { ExperienceItem } from "./ExperienceItem";

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      className="py-28"
    >
      <Container className="max-w-5xl">
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Professional Journey
          </h2>
        </div>

        <div className="space-y-2">
          {experiences.map((experience, index) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}