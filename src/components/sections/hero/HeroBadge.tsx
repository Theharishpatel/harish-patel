import { Sparkles } from "lucide-react";

interface HeroBadgeProps {
  text: string;
}

export function HeroBadge({ text }: HeroBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground backdrop-blur-md">
      <Sparkles className="size-3.5 text-primary" />
      <span>{text}</span>
    </div>
  );
}