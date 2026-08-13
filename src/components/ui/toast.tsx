import { domAnimation, LazyMotion } from "motion/react";
import * as m from "motion/react-m";
import React from "react";
import { Button } from "react-aria-components";
import { toast as toastPrimitive } from "sonner";

import { IconInfoSquareRounded, IconX } from "@tabler/icons-react";
import { Icon } from "./icon";

export type ToastProps = {
  id: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
  actions?: React.ReactNode;
  duration?: number;
  isDismissable?: boolean;
};

const DEFAULT_DURATION = 5000;

export function toast(toast: Omit<ToastProps, "id">) {
  return toastPrimitive.custom((id) => <Toast id={id} {...toast} />, {
    duration: toast.duration ?? DEFAULT_DURATION,
  });
}

export function ToastIconShell({ children }: React.PropsWithChildren) {
  return (
    <div className="grid aspect-square w-full place-items-center rounded-md bg-[#29282B] p-1.5 text-white/60 ring ring-white/15 [&>[data-slot=icon]]:size-5">
      {children}
    </div>
  );
}

function DefaultToastIcon(): React.ReactNode {
  return (
    <ToastIconShell>
      <Icon>
        <IconInfoSquareRounded />
      </Icon>
    </ToastIconShell>
  );
}

export function Toast(props: ToastProps) {
  const {
    id,
    title,
    description,
    icon = <DefaultToastIcon />,
    actions,
    duration = DEFAULT_DURATION,
    isDismissable = false,
  } = props;

  return (
    <LazyMotion features={domAnimation}>
      <div className="stack relative isolate grid w-full min-w-72 gap-x-3 overflow-hidden rounded-xl bg-[#323438] shadow-xl md:max-w-92">
        <m.div
          aria-hidden="true"
          variants={{
            hidden: {
              "--progress": "100%",
            },
            show: {
              "--progress": "0%",
            },
          }}
          initial="hidden"
          animate="show"
          transition={{
            duration: duration / 1000,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="-z-1 h-full w-full bg-[#161618] [clip-path:inset(0px_var(--progress)_0px_0px)]"
        />

        <div className="z-1 grid grid-cols-[auto_1fr_auto] items-start gap-x-3 rounded-[inherit] px-3.5 py-4 inset-ring-2 inset-ring-white/15">
          {icon}

          <div className="space-y-2.5">
            <div className="space-y-0.5 select-none">
              <p className="text-sm font-semibold text-pretty text-white">
                {title}
              </p>
              <p className="text-xs font-medium text-pretty text-white/60">
                {description}
              </p>
            </div>
            {actions && <div className="flex gap-x-2">{actions}</div>}
          </div>

          {isDismissable && (
            <div>
              <Button
                className="rounded-full p-1 ring-1 ring-white/20 data-focus-visible:ring-white/40 data-focus-visible:outline-none data-hovered:ring-white/40"
                onPress={() => toastPrimitive.dismiss(id)}
              >
                <IconX className="size-5 text-white/60" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </LazyMotion>
  );
}
