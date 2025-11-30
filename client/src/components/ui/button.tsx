import { useVariantProps } from "@/components/hooks/useVariantProps";
import React from "react";
import { Button as ButtonPrimitive } from "react-aria-components";
import { type VariantProps, tv } from "tailwind-variants";
import { Spinner } from "./spinner";
import { focusStyles } from "./primitive";

const buttonStyles = tv({
  slots: {
    base: [
      "group shrink-0 stack inline-grid overflow-hidden place-items-center rounded-lg w-fit border cursor-pointer",
      "bg-(--bt-background) border-(--bt-border-color) ring-primary-light",
      "data-disabled:cursor-not-allowed data-disabled:opacity-50",
      "outline-none",
    ],
    label: [
      "font-semibold text-sm flex items-center gap-x-2",
      "text-(--bt-foreground)",
      "[&>[data-slot=icon]]:size-5",
      "group-data-pending:invisible visible",
    ],
    spinner: ["group-data-pending:visible invisible size-4.5"],
  },

  variants: {
    variant: {
      classic: "py-2.5 px-3.5",
      icon: {
        base: "aspect-square",
        label: "[&>[data-slot=icon]]:size-6 p-2",
      },
      fancy: {
        label: [
          "pl-3.5 items-center py-1 [&>[data-slot=icon]]:mr-1 [&>[data-slot=icon]]:size-8 [&>[data-slot=icon]]:p-1 group-data-isrounded:[&>[data-slot=icon]]:rounded-full",
        ],
      },
    },
    isRounded: {
      true: "rounded-full",
    },
    color: {
      black: {
        base: [
          "[--bt-background:var(--color-gray-950)] [--bt-border-color:var(--color-gray-950)] [--bt-foreground:var(--color-white)]/90",
          "group-focus-visible:[--bt-background:var(--color-gray-950)]/80 data-hovered:[--bt-background:var(--color-gray-950)]/80 data-focus-visible:ring-1 data-pressed:[--bt-background:var(--color-gray-950)]/90",
        ],
        label:
          "group-data-[variant=fancy]:[&>[data-slot=icon]]:bg-primary-light group-data-[variant=fancy]:[&>[data-slot=icon]]:text-gray-950",
      },
      white: {
        base: [
          "[--bt-background:var(--color-white)] [--bt-border-color:var(--color-gray-950)]/10 [--bt-foreground:var(--color-gray-950)]/70",
          "data-hovered:[--bt-background:var(--color-gray-50)] data-pressed:[--bt-background:var(--color-gray-100)] data-focus-visible:ring-1 data-focus-visible:bg-gray-50",
        ],
        label:
          "group-data-[variant=fancy]:[&>[data-slot=icon]]:bg-primary-dark group-data-[variant=fancy]:[&>[data-slot=icon]]:text-white",
      },
      stone: {
        base: [
          "[--bt-background:var(--color-stone-950)]/3 [--bt-foreground:var(--color-stone-900)] [--bt-border-color:transparent]",
          "data-hovered:[--bt-background:var(--color-stone-200)]/80 data-pressed:[--bt-background:var(--color-stone-200)]",
          focusStyles(),
        ],
      },
    },
  },

  defaultVariants: {
    color: "black",
    variant: "classic",
    isRounded: false,
  },
});

type Slots = keyof typeof buttonStyles.slots;
export interface ButtonProps
  extends Omit<React.ComponentProps<typeof ButtonPrimitive>, "className">,
    VariantProps<typeof buttonStyles> {
  className?: {
    [K in Slots]?: string;
  };
}

const { base, spinner, label } = buttonStyles();
function Button(props: ButtonProps) {
  const { className = {}, children, ...rest } = props;
  const {
    base: baseClassName,
    spinner: spinnerClassName,
    label: labelClassName,
  } = className;

  const {
    dataAttributes,
    variants,
    props: finalProps,
  } = useVariantProps({
    props: rest,
    styles: buttonStyles,
  });

  return (
    <ButtonPrimitive
      data-slot="control"
      className={base({ className: baseClassName, ...variants })}
      {...dataAttributes}
      {...finalProps}
    >
      {(renderProps) => (
        <>
          <span
            data-slot="label"
            className={label({ className: labelClassName, ...variants })}
          >
            {typeof children === "function" ? children(renderProps) : children}
          </span>
          <Spinner
            className={spinner({ className: spinnerClassName, ...variants })}
          />
        </>
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonStyles };
