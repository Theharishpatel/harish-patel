import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-14 max-w-3xl",
        isCenter && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          {badge}
        </p>
      )}

      <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}