import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";

import { techStack } from "@/data/tech_stack";

import { TechCategoryCard } from "./TechCategoryCard";

export function TechStackSection() {
  return (
    <Section
      id="tech-stack"
      className="py-28"
    >
      <Container>
        <SectionHeading
          badge="Skills"
          title="Tech Stack"
          description="Categorized expertise in modern web development."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((category) => (
            <TechCategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}