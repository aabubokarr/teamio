import { Logo } from "@/components/icons/logo";
import {
  IconBrandHipchat,
  IconCalendar,
  IconLogout,
  IconLayout2,
  IconSettings,
  IconSmartHome,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const sidebarStyles = tv({
  slots: {
    link: [
      "group relative flex items-center gap-3",
      "h-11 w-full rounded-xl px-3",
      "text-[14px] font-medium",
      "text-gray-600",
      "transition-all duration-200",
      "hover:bg-gray-100/80 hover:text-gray-950",
    ],

    icon: [
      "size-[19px] shrink-0",
      "text-gray-500",
      "transition-colors duration-200",
      "group-hover:text-gray-900",
    ],
  },

  variants: {
    color: {
      red: {
        link: ["text-rose-500", "hover:bg-rose-50 hover:text-rose-600"],
        icon: "text-rose-400 group-hover:text-rose-500",
      },
    },
  },
});

const { link, icon } = sidebarStyles();

export const links = [
  {
    to: "/timeline",
    title: "Timeline",
    icon: IconSmartHome,
  },
  {
    to: "/managements",
    title: "Management",
    icon: IconLayout2,
  },
  {
    to: "/messages",
    title: "Messages",
    icon: IconBrandHipchat,
  },
  {
    to: "/calendar",
    title: "Calendar",
    icon: IconCalendar,
  },
  {
    to: "/settings",
    title: "Settings",
    icon: IconSettings,
  },
] satisfies {
  to: NonNullable<React.ComponentProps<typeof Link>["to"]>;
  title: string;
  icon: React.ComponentType;
  variant?: VariantProps<typeof sidebarStyles>;
}[];

export function Sidebar() {
  return (
    <aside
      className="
        [grid-column:left-sidebar]
        hidden
        h-svh
        w-full
        max-w-56
        overflow-hidden
        md:block
        sticky
        top-0
      "
    >
      <div className="flex h-full flex-col px-4 py-3">
        <div className="flex h-10 shrink-0 items-center px-2">
          <Logo className="w-30" />
        </div>
        <nav className="mt-7 flex flex-col gap-1">
          {links.map((node) => (
            <Link
              key={node.to}
              to={node.to}
              className={link()}
              activeProps={{
                className: "bg-gray-950/[0.06] text-gray-950 font-semibold",
              }}
            >
              {/* Active indicator */}
              <span
                className="
                  absolute
                  -left-4
                  top-1/2
                  h-5
                  w-1
                  -translate-y-1/2
                  rounded-r-full
                  bg-gray-950
                  opacity-0
                  transition-opacity
                  group-data-[status=active]:opacity-100
                "
              />

              <span className="grid size-8 shrink-0 place-items-center rounded-lg">
                <node.icon className={icon()} />
              </span>

              <span className="truncate">{node.title}</span>
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <div className="shrink-0 space-y-2">
          {/* Divider */}
          <div className="mx-2 mb-3 h-px bg-gray-950/[0.07]" />

          {/* Logout */}
          <Link to="/login" className={link({ color: "red" })}>
            <span className="grid size-8 shrink-0 place-items-center rounded-lg">
              <IconLogout className={icon({ color: "red" })} />
            </span>

            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
