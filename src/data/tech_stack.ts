import {
  Braces,
  Database,
  Wrench,
  Brain,
  Cloud,
} from "lucide-react";

import { TechCategory } from "@/types/tech_stack";

export const techStack: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Braces,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Database,
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    technologies: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Figma",
    ],
  },
  {
    id: "ai",
    title: "AI",
    icon: Brain,
    technologies: [
      "OpenAI",
      "LangChain",
      "FAISS",
      "TensorFlow",
    ],
  },
  {
    id: "deployment",
    title: "Deployment",
    icon: Cloud,
    technologies: [
      "Vercel",
      "AWS",
      "Netlify",
    ],
  },
];