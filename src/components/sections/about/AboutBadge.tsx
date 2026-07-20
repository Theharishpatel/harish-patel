import { BadgeCheck } from "lucide-react";

interface AboutBadgeProps {
  title: string;
  description: string;
}

export function AboutBadge({
  title,
  description,
}: AboutBadgeProps) {
  return (
    <div
      className="
        mt-8
        flex
        items-start
        gap-4
        rounded-2xl
        border
        border-border/60
        bg-card/60
        p-5
        backdrop-blur-sm
      "
    >
      <div
        className="
          flex
          size-11
          items-center
          justify-center
          rounded-xl
          bg-primary/10
          text-primary
        "
      >
        <BadgeCheck className="size-5" />
      </div>

      <div className="space-y-1">
        <h3 className="font-semibold text-foreground">
          {title}
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
}