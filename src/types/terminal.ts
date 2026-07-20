export interface TerminalCommand {
  id: string;
  type: "command" | "output";
  text: string;
}