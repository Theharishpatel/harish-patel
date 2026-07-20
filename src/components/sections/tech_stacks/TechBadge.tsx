interface TechBadgeProps {
  label: string;
}

export function TechBadge({
  label,
}: TechBadgeProps) {
  return (
    <span
      className="
        rounded-md
        border
        border-border/60
        bg-muted/60
        px-2.5
        py-1
        text-xs
        font-medium
      "
    >
      {label}
    </span>
  );
}