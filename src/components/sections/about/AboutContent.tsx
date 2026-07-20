import { about } from "@/data/about";

import { AboutBadge } from "./AboutBadge";

export function AboutContent() {
  return (
    <div className="space-y-8">
      {/* Section Heading */}

      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          ABOUT ME
        </p>

        <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {about.title}
        </h2>

        <p className="max-w-xl text-lg leading-8 text-muted-foreground">
          {about.subtitle}
        </p>
      </div>

      {/* Description */}

      <div className="space-y-5">
        {about.description.map((paragraph, index) => (
          <p
            key={index}
            className="leading-8 text-muted-foreground"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Badge */}

      <AboutBadge
        title={about.badge.title}
        description={about.badge.description}
      />
    </div>
  );
}