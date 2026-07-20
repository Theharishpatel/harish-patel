import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "gapmatch-ai",

    title: "GapMatch AI",

    description:
      "GapMatch is a sophisticated full-stack application designed to bridge the void between a candidate's current profile and the specific requirements of a Job Description (JD). By leveraging AI, GapMatch identifies missing keywords, matches core competencies, and provides a clear roadmap for candidates to become job-ready.",

    image: "/images/projects/gapmatch-ai.png",

    technologies: [
      "React.js (Vite)", "SCSS", "Context API", "Node.js", "Express.js",
      "MongoDB (Mongoose ODM)",
      "JWT", "HTTP-Only Cookies", "Bcrypt",
      "Axios (with Interceptors for error propagation)"
    ],

    github: "https://github.com/Theharishpatel/GapMatch-AI",

    live: "https://gap-match-ai.vercel.app/",

    featured: true,

    year: "2026",
  },

  {
    id: "cowatch",

    title: "CoWatch",

    description:
      "A real-time synchronized video streaming platform using MERN, Socket.IO and WebRTC for collaborative watching.",

    image: "/images/projects/cowatch.png",

    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "WebRTC",
    ],

       github: "https://github.com/Theharishpatel/CoWatch-VirtualTheater",


    live: "https://co-watch-main.vercel.app/",

    featured: true,

    year: "2025",
  },

  
];