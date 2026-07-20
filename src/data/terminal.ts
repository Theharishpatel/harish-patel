import { TerminalCommand } from "@/types/terminal";

export const terminalCommands: TerminalCommand[] = [
  {
    id: "whoami-cmd",
    type: "command",
    text: "whoami",
  },
  {
    id: "whoami-output",
    type: "output",
    text: "Harish Patel",
  },
  {
    id: "role-cmd",
    type: "command",
    text: "role",
  },
  {
    id: "role-output",
    type: "output",
    text: "Frontend Developer",
  },
  {
    id: "stack-cmd",
    type: "command",
    text: "stack",
  },
  {
    id: "stack-output",
    type: "output",
    text: "React • Next.js • TypeScript • Tailwind CSS • Node.js",
  },
  {
    id: "location-cmd",
    type: "command",
    text: "location",
  },
  {
    id: "location-output",
    type: "output",
    text: "Indore, Madhya Pradesh",
  },
];