export function TerminalHeader() {
  return (
    <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full bg-red-500" />
        <span className="size-3 rounded-full bg-yellow-500" />
        <span className="size-3 rounded-full bg-green-500" />
      </div>

      <span className="text-xs text-muted-foreground">
        harish@portfolio ~
      </span>
    </div>
  );
}