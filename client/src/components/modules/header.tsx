import { Logo } from "@/components/icons/logo";
import {
  IconBrandHipchat,
  IconCalendar,
  IconDotsVertical,
  IconLayout2,
  IconLogout,
  IconPlus,
  IconSettings,
  IconSmartHome,
  IconUsers,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { SecondaryHeader } from "./secondary-header";

export const headerStyles = tv({
  slots: {
    link: [
      "px-4 -ml-4 py-1.5 font-semibold rounded-2xl text-lg grid col-span-full grid-cols-subgrid items-center group",
      "hover:bg-gray-100",
    ],
    icon: "size-6",
  },
  variants: {
    color: {
      red: {
        link: "text-rose-500 hover:bg-rose-50",
      },
    },
  },
});

const { link, icon } = headerStyles();

export const links = [
  { to: "/", title: "Timeline", icon: IconSmartHome },
  { to: "/managements", title: "Management", icon: IconLayout2 },
  { to: "/messages", title: "Messages", icon: IconBrandHipchat },
  { to: "/members", title: "Members", icon: IconUsers },
  { to: "/calendar", title: "Calendar", icon: IconCalendar },
  { to: "/settings", title: "Settings", icon: IconSettings },
] satisfies {
  to: NonNullable<React.ComponentProps<typeof Link>["to"]>;
  title: string;
  icon: React.ComponentType;
  variant?: VariantProps<typeof headerStyles>;
}[];

export function Header() {
  return (
    <div className="[grid-column:left-sidebar] hidden md:block overflow-y-auto sticky top-0 py-10 h-svh max-w-44 md:max-w-64 w-full">
      <div className="space-y-4 pl-4">
        <Logo className="-ml-2.5 w-34" />
        <nav className="pt-6 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1">
          {links.map((node, index) => (
            <Link key={index} to={node.to} className={link()}>
              <span>
                <node.icon className={icon()} />
              </span>
              <span>{node.title}</span>
            </Link>
          ))}

          <div className="my-4 p-4 col-span-full bg-primary-light/20 rounded-2xl space-y-6">
            <div className="flex items-center justify-between">
              <p className="uppercase text-sm">Projects</p>
              <button
                type="button"
                className="inline-grid size-6 place-items-center bg-black rounded-full text-white"
              >
                <p className="sr-only">Create Project</p>
                <IconPlus className="size-5" />
              </button>
            </div>
            <div className="grid grid-cols-[--spacing(6)_1fr_--spacing(6)] gap-x-2 gap-y-3">
              <div className="grid grid-cols-subgrid col-span-full">
                <div className="rounded-lg aspect-square w-full bg-gradient-to-b from-violet-600 to-indigo-300" />
                <p className="font-medium">Design System</p>
                <button
                  type="button"
                  className="border size-6 rounded-full inline-grid place-items-center"
                >
                  <p className="sr-only">See More</p>
                  <IconDotsVertical className="size-5" />
                </button>
              </div>
              <div className="grid grid-cols-subgrid col-span-full">
                <div className="rounded-lg aspect-square w-full bg-gradient-to-b from-amber-600 to-yellow-300" />
                <p className="font-medium">Landing Design</p>
                <button
                  type="button"
                  className="border size-6 rounded-full inline-grid place-items-center"
                >
                  <p className="sr-only">See More</p>
                  <IconDotsVertical className="size-5" />
                </button>
              </div>
              <div className="grid grid-cols-subgrid col-span-full">
                <div className="rounded-lg aspect-square w-full bg-gradient-to-b from-rose-600 to-orange-300" />
                <p className="font-medium">User Experience</p>
                <button
                  type="button"
                  className="border size-6 rounded-full inline-grid place-items-center"
                >
                  <p className="sr-only">See More</p>
                  <IconDotsVertical className="size-5" />
                </button>
              </div>
            </div>
          </div>

          <Link to="/login" className={link({ color: "red" })}>
            <span>
              <IconLogout className={icon()} />
            </span>
            <span>Logout</span>
          </Link>
        </nav>

        <div className="md:hidden">
          <SecondaryHeader />
        </div>
      </div>
    </div>
  );
}
