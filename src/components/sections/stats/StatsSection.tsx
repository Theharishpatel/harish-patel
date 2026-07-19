import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import { stats } from "@/data/stats";

import { StatCard } from "./StatsCard";

export function StatsSection() {
  return (
    <Section className="pt-8 md:pt-12">
      <Container>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard
              key={stat.label}
              stat={stat}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}