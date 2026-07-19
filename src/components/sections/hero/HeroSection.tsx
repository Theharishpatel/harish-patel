import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { hero } from "@/data/hero";

import { HeroBadge } from "./HeroBadge";
import { HeroButtons } from "./HeroButtons";
import { ScrollIndicator } from "./ScrollIndicator";

export function HeroSection() {
  return (
    <Section
      id="home"
      className="flex min-h-[calc(100vh-5rem)] items-center"
    >
      <Container>
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <HeroBadge text={hero.badge} />

          <h1 className="mt-8 max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {hero.heading}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-10">
            <HeroButtons
              primary={hero.primaryButton}
              secondary={hero.secondaryButton}
            />
          </div>

          <ScrollIndicator />
        </div>
      </Container>
    </Section>
  );
}