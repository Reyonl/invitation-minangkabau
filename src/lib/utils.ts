import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Helper to safely decode guest name from URL query parameter
 */
export function decodeGuestName(rawName?: string | null, fallback = "Tamu Undangan"): string {
  if (!rawName || typeof rawName !== "string" || rawName.trim() === "") {
    return fallback;
  }

  try {
    // Replace '+' with space first (common in URL query params) then decode
    const decoded = decodeURIComponent(rawName.replace(/\+/g, " "));
    const cleanName = decoded.trim();
    return cleanName.length > 0 ? cleanName : fallback;
  } catch {
    return rawName.replace(/\+/g, " ").trim() || fallback;
  }
}

/**
 * Format date string into Indonesian localized date
 */
export function formatWeddingDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  } catch {
    return dateString;
  }
}

/**
 * Safely prepend basePath for assets like audio or direct links
 */
export function getAssetUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
