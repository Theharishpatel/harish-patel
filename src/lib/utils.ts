import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes intelligently.
 * Used across all components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Smoothly scrolls to a section by its ID.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);

  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/**
 * Converts text into a URL-friendly slug.
 *
 * Example:
 * "My Awesome Project"
 * -> "my-awesome-project"
 */
export function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

/**
 * Formats a date into a readable string.
 *
 * Example:
 * Jan 2025
 */
export function formatDate(
  date: Date | string,
  locale = "en-US"
) {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

/**
 * Calculates experience duration.
 *
 * Example:
 * Jan 2024 → Jul 2025
 * = 1 yr 6 mos
 */
export function calculateDuration(
  start: Date | string,
  end?: Date | string
) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  const months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return `${remainingMonths} mos`;
  }

  if (remainingMonths === 0) {
    return `${years} yr${years > 1 ? "s" : ""}`;
  }

  return `${years} yr${years > 1 ? "s" : ""} ${remainingMonths} mos`;
}