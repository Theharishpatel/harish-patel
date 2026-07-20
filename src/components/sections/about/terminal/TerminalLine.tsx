import { cn } from "@/lib/utils";
import { TerminalCommand } from "@/types/terminal";

interface TerminalLineProps {
  line: TerminalCommand;
}

export function TerminalLine({ line }: TerminalLineProps) {
  const isCommand = line.type === "command";

  return (
    <div
      className={cn(
        "flex items-start text-sm leading-relaxed",
        isCommand ? "gap-2" : "pl-5"
      )}
    >
      {isCommand && (
        <span className="font-semibold text-primary">$</span>
      )}

      <span
        className={cn(
          isCommand
            ? "font-medium text-foreground"
            : "text-muted-foreground"
        )}
      >
        {line.text}
      </span>
    </div>
  );
}