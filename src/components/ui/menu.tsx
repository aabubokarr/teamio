import { AnimatePresence, motion } from "motion/react";
import React from "react";
import {
  composeRenderProps,
  MenuItem as MenuItemPrimitive,
  Menu as MenuPrimitive,
  MenuTrigger as MenuTriggerPrimitive,
  OverlayTriggerStateContext,
  Popover,
  Separator as SeparatorPrimitive,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

export const menuStyles = tv({
  slots: {
    container: [
      "min-w-[180px]",
      "block",
      "grid",
      "grid-cols-[auto_1fr]",
      "font-bold",
      "items-center",
      "rounded-2xl",
      "outline-none",
      "isolate",
      "bg-white",
      "border-none",
      "shadow-[0_4px_20px_rgba(0,0,0,0.08)]",
      "p-1.5",
      "gap-y-0.5",
    ],
    item: [
      "grid",
      "p-2.5",
      "gap-x-3",
      "rounded-xl",
      "col-span-full",
      "grid-cols-subgrid",
      "*:data-[slot=icon]:size-5",
      "*:data-[slot=icon]:stroke-[1.5]",
      "*:data-[slot=icon]:col-start-1",
      "outline-none",
      "items-center",
      "text-sm",
      "font-bold",
      "text-[#1A1D1F]",
      "data-hovered:bg-[#F4F4F4]",
      "data-pressed:bg-[#F4F4F4]",
      "data-focus-visible:bg-[#F4F4F4]",
      "mx-0",
      "select-none",
      "cursor-pointer",
      "transition-colors"
    ],
    label: ["col-start-2"],
    popover: ["will-change-transform", "origin-top-right"],
    separator: ["bg-stone-950/15", "my-1.5", "col-span-full", "h-px"],
  },
  variants: {
    variant: {
      danger: {
        item: [
          "text-red-500",
          "hover:bg-red-500/10",
          "focus-visible:bg-red-500/10",
        ],
      },
    },
  },
});

const { container, item, label, popover, separator } = menuStyles();

export const MenuTrigger = MenuTriggerPrimitive;

const MotionPopover = motion(Popover);

export interface MenuProps
  extends React.ComponentProps<typeof MenuPrimitive>,
    Pick<
      React.ComponentProps<typeof Popover>,
      | "arrowBoundaryOffset"
      | "shouldUpdatePosition"
      | "boundaryElement"
      | "isKeyboardDismissDisabled"
      | "shouldCloseOnInteractOutside"
      | "isNonModal"
      | "shouldFlip"
      | "crossOffset"
      | "containerPadding"
      | "placement"
      | "offset"
    > {
  popoverClassName?: string;
}
export function Menu(props: MenuProps) {
  const state = React.use(OverlayTriggerStateContext);

  const {
    arrowBoundaryOffset,
    shouldUpdatePosition,
    boundaryElement,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    isNonModal,
    shouldFlip,
    crossOffset,
    containerPadding,
    placement,
    offset,
    ...rest
  } = props;

  return (
    <AnimatePresence>
      {state?.isOpen && (
        <MotionPopover
          isOpen
          onOpenChange={state.setOpen}
          className={popover({ className: props.popoverClassName })}
          variants={{
            enter: {
              opacity: 1,
              y: 0,
              scale: 1,
            },
            exit: {
              opacity: 0,
              y: 20,
              scale: 0.8,
            },
          }}
          initial="exit"
          animate="enter"
          exit="exit"
          transition={{
            type: "spring",
            bounce: 0.1,
            damping: 15,
            stiffness: 200,
            // mass: 0.8,
            duration: 0.1,
          }}
          arrowBoundaryOffset={arrowBoundaryOffset}
          shouldUpdatePosition={shouldUpdatePosition}
          boundaryElement={boundaryElement}
          isKeyboardDismissDisabled={isKeyboardDismissDisabled}
          shouldCloseOnInteractOutside={shouldCloseOnInteractOutside}
          isNonModal={isNonModal}
          shouldFlip={shouldFlip}
          crossOffset={crossOffset}
          containerPadding={containerPadding}
          placement={placement}
          offset={offset}
        >
          <InnerMenu {...rest}>{props.children}</InnerMenu>
        </MotionPopover>
      )}
    </AnimatePresence>
  );
}

function InnerMenu(props: React.ComponentProps<typeof MenuPrimitive>) {
  return (
    <MenuPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        container({
          ...renderProps,
          className,
        })
      )}
    />
  );
}

export interface MenuItemProps
  extends React.ComponentProps<typeof MenuItemPrimitive>,
    VariantProps<typeof menuStyles> {}
export function MenuItem(props: MenuItemProps) {
  const { variant } = props;

  return (
    <MenuItemPrimitive
      {...props}
      className={composeRenderProps(props.className, (className, renderProps) =>
        item({
          ...renderProps,
          className,
          variant,
        })
      )}
    />
  );
}

export function MenuLabel(props: React.ComponentProps<"span">) {
  return <span {...props} className={label({ className: props.className })} />;
}

export function MenuSeparator(
  props: React.ComponentProps<typeof SeparatorPrimitive>
) {
  return (
    <SeparatorPrimitive
      {...props}
      className={separator({ className: props.className })}
    />
  );
}
