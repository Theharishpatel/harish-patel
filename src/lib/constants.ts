/**
 * ==========================================================
 * SITE CONFIGURATION
 * ==========================================================
 */

export const SITE_CONFIG = {
  name: "Harish Patel",

  title: "Harish Patel | Frontend Developer",

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web experiences.",

  url: "https://your-domain.com",

  ogImage: "/images/og-image.png",

  locale: "en_US",
};

/**
 * ==========================================================
 * LAYOUT
 * ==========================================================
 */

export const LAYOUT = {
  container: "max-w-7xl",

  navbarHeight: "5rem",

  sectionSpacing: {
    mobile: "py-20",

    tablet: "md:py-28",

    desktop: "lg:py-36",
  },
};

/**
 * ==========================================================
 * SECTION IDS
 * ==========================================================
 */

export const SECTION_IDS = {
  HOME: "home",

  ABOUT: "about",

  EXPERIENCE: "experience",

  PROJECTS: "projects",

  TECH_STACK: "tech-stack",

  CONTACT: "contact",
} as const;

/**
 * ==========================================================
 * ANIMATION
 * ==========================================================
 */

export const ANIMATION = {
  duration: 0.6,

  stagger: 0.15,

  delay: 0.2,

  ease: [0.22, 1, 0.36, 1] as const,
};

/**
 * ==========================================================
 * BREAKPOINTS
 * ==========================================================
 */

export const BREAKPOINTS = {
  sm: 640,

  md: 768,

  lg: 1024,

  xl: 1280,

  "2xl": 1536,
};

/**
 * ==========================================================
 * EXTERNAL LINKS
 * ==========================================================
 */

export const EXTERNAL_LINKS = {
  github: "https://github.com/Theharishpatel",

  linkedin: "https://linkedin.com/in/your-link",

  twitter: "https://x.com/your-handle",

  email: "mailto:harishpatel.tech@gmail.com",

  resume: "/resume.pdf",
};

/**
 * ==========================================================
 * SEO
 * ==========================================================
 */

export const SEO = {
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
};