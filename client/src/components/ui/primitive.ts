import { tv } from "tailwind-variants";

export const focusStyles = tv({
  base: [
    "focus-visible:ring-primary-light",
    "focus-visible:outline-none",
    "focus-visible:ring-1",
  ],
});

export const focusRingStyles = tv({
  base: [
    "focus-visible:ring-offset-background",
    "focus-visible:ring-primary-light",
    "focus-visible:ring-2",
    "focus-visible:ring-offset-2",
    "focus-visible:outline-none",
  ],
});
