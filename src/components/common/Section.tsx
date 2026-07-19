import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 md:py-28 lg:py-36",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}