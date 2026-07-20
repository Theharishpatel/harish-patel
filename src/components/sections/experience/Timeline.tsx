interface TimelineProps {
  isLast: boolean;
}

export function Timeline({
  isLast,
}: TimelineProps) {
  return (
    <div className="relative flex h-full justify-center">
      {/* Vertical Line */}
      {!isLast && (
        <div className="absolute top-3 bottom-0 w-px bg-border" />
      )}

      {/* Dot */}
      <div className="relative z-10 mt-2">
        {/* Glow */}
        <div className="absolute inset-0 scale-[2.8] rounded-full bg-primary/25 blur-lg" />

        {/* Ring */}
        <div className="relative flex size-4 items-center justify-center rounded-full border border-primary/40 bg-background">
          <div className="size-2 rounded-full bg-primary" />
        </div>
      </div>

      {/* Horizontal Connector */}
      <div className="absolute top-4 left-1/2 h-px w-12 bg-border" />
    </div>
  );
}