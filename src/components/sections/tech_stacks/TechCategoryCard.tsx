import { TechCategory } from "@/types/tech_stack";

import { TechBadge } from "./TechBadge";

interface TechCategoryCardProps {
  category: TechCategory;
}

export function TechCategoryCard({
  category,
}: TechCategoryCardProps) {
  const Icon = category.icon;

  return (
    <article
      className="
        rounded-2xl
        border
        border-border/60
        bg-card/60
        p-6
        transition-all
        duration-300
        hover:border-primary/30
        hover:-translate-y-1
      "
    >
      <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" />
      </div>

      <h3 className="text-lg font-semibold">
        {category.title}
      </h3>

      <div className="mt-5 flex flex-wrap gap-2">
        {category.technologies.map((tech) => (
          <TechBadge
            key={tech}
            label={tech}
          />
        ))}
      </div>
    </article>
  );
}