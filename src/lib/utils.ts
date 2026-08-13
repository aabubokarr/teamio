import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTitle(title?: string | string[]) {
  const APP_NAME = "2 Day Goals";
  if (!title) return APP_NAME;
  const titleStr = Array.isArray(title) ? title.join(" | ") : title;
  return `${titleStr} | ${APP_NAME}`;
}
