import { Stat } from "@/types/stat";

interface StatCardProps {
  stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-border/60
        bg-card/50
        p-6
        text-center
        backdrop-blur-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:bg-card
      "
    >
      <h3 className="text-3xl font-bold tracking-tight text-foreground">
        {stat.value}
      </h3>

      <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}