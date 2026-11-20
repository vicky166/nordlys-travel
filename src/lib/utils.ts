import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDuration(days: number): string {
  if (days === 1) return "01 DAY";
  return `${String(days).padStart(2, "0")} DAYS`;
}
