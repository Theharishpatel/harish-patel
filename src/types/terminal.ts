export interface TerminalCommand {
  type: "command" | "output";

  text: string;
}