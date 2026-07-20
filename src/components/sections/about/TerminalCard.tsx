import { terminalCommands } from "@/data/terminal";

import {
  TerminalHeader,
  TerminalLine,
} from "./terminal";

export function TerminalCard() {
  return (
    <div
      className="
        mt-16
        overflow-hidden
        rounded-3xl
        border
        border-border/60
        bg-card
        shadow-xl
      "
    >
      <TerminalHeader />

      <div className="space-y-4 p-6 font-mono text-sm">
        {terminalCommands.map((line) => (
          <TerminalLine
            key={line.id}
            line={line}
          />
        ))}
      </div>
    </div>
  );
}