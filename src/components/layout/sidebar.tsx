import { Logo } from "@/components/icons/logo";
import {
  IconBrandHipchat,
  IconCalendar,
  IconLogout,
  IconLayout2,
  IconSettings,
  IconSmartHome,
  IconSparkles,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const sidebarStyles = tv({
  slots: {
    link: [
      "group relative flex items-center gap-3",
      "h-11 w-full rounded-2xl px-3",
      "text-[13px] font-bold",
      "text-slate-600",
      "transition-all duration-200",
      "hover:bg-slate-100 hover:text-slate-900",
    ],

    icon: [
      "size-[19px] shrink-0",
      "text-slate-500",
      "transition-colors duration-200",
      "group-hover:text-indigo-600",
    ],
  },

  variants: {
    color: {
      red: {
        link: ["text-rose-600", "hover:bg-rose-50 hover:text-rose-700"],
        icon: "text-rose-500 group-hover:text-rose-600",
      },
    },
  },
});

const { link, icon } = sidebarStyles();

export const links = [
  {
    to: "/timeline",
    title: "Timeline Feed",
    icon: IconSmartHome,
  },
  {
    to: "/managements",
    title: "Task Board",
    icon: IconLayout2,
  },
  {
    to: "/messages",
    title: "Team DMs",
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
        col-[left-sidebar]
        hidden
        h-svh
        w-full
        max-w-60
        overflow-hidden
        md:block
        sticky
        top-0
        bg-white
        font-sans
      "
    >
      <div className="flex h-full flex-col p-4">
        {/* Teamio Logo Header */}
        <Link to="/" className="flex items-center gap-2.5 px-2 py-2 mb-6 group">
          <Logo className="size-7 shrink-0 transition-transform group-hover:scale-105" />
          <div>
            <span className="text-lg font-black tracking-tight text-slate-900 block leading-none">
              Teamio
            </span>
            <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider block mt-0.5">
              Work & People
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {links.map((node) => (
            <Link
              key={node.to}
              to={node.to}
              className={link()}
              activeProps={{
                className: "bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20 hover:bg-indigo-600 hover:text-white",
              }}
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-xl">
                <node.icon className={icon()} />
              </span>

              <span className="truncate">{node.title}</span>
            </Link>
          ))}
        </nav>

        <div className="flex-1" />

        {/* Workspace Card */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-3 mb-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 flex items-center gap-1">
              <IconSparkles size={12} /> Teamio Pro
            </span>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs font-bold text-slate-900">Design System Hub</p>
          <p className="text-[10px] text-slate-500 font-medium">8 Team Members Active</p>
        </div>

        {/* Logout */}
        <div className="shrink-0 pt-2 border-t border-slate-100">
          <Link to="/login" className={link({ color: "red" })}>
            <span className="grid size-8 shrink-0 place-items-center rounded-xl">
              <IconLogout className={icon({ color: "red" })} />
            </span>
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
