import { Circle } from "lucide-react";

import { Experience } from "@/types/experience";

import { Timeline } from "./Timeline";

interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceItem({
  experience,
  isLast,
}: ExperienceItemProps) {
  return (
    <div
      className="
        grid
        gap-8
        pb-16
        md:grid-cols-[140px_60px_1fr]
      "
    >
      {/* Date */}

      <div className="pt-2 text-right">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {experience.duration}
        </span>
      </div>

      {/* Timeline */}

      <Timeline isLast={isLast} />

      {/* Card */}

      <article
        className="
          rounded-2xl
          border
          border-border/60
          bg-card/50
          p-8
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-primary/30
          hover:-translate-y-1
        "
      >
        <h3 className="text-3xl font-bold tracking-tight">
          {experience.role}
        </h3>

        <p className="mt-2 text-primary">
          {experience.company}
        </p>

        <ul className="mt-8 space-y-5">
          {experience.description.map((item) => (
            <li
              key={item}
              className="flex items-start gap-4"
            >
              <Circle className="mt-2 size-2 fill-primary stroke-none" />

              <span className="leading-7 text-muted-foreground">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}