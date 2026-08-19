import {
  IconBell,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconLogout,
  IconMenu,
  IconSearch,
  IconX,
} from "@tabler/icons-react";

import _Avatar from "boring-avatars";
const Avatar = (_Avatar as any).default ?? _Avatar;

import { Link } from "@tanstack/react-router";
import { LazyMotion, domAnimation } from "motion/react";

import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
} from "react-aria-components";

import { Logo } from "@/components/icons/logo";
import { CreateGroup } from "@/features/group/create-group";
import { CreatePost } from "@/features/post/create-post";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay, MotionModal } from "@/components/ui/modal";

import { TRANSITION_EASINGS } from "@/components/utilities/transition";

import { sidebarStyles, links } from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";

const profiles = [
  {
    name: "Intercom",
    date: "2 days ago",
  },
  {
    name: "Marvel Studios",
    date: "2 weeks ago",
  },
  {
    name: "Netflix",
    date: "1 month ago",
  },
  {
    name: "Spotify",
    date: "3 months ago",
  },
  {
    name: "Google",
    date: "1 year ago",
  },
];

export function Topbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <LazyMotion features={domAnimation}>
      <div
        className={cn(
          `
            sticky
            top-0
            z-40
            w-full
            border-b
            border-gray-950/[0.06]
            bg-background/95
            backdrop-blur-md
          `,
          className
        )}
        {...props}
      >
        {/* Full width container */}
        <div
          className="
            flex
            w-full
            items-center
            gap-2
            px-3
            py-2.5
            sm:px-4
            md:px-6
            md:py-3
          "
        >
          {/* =====================================================
              MOBILE MENU
          ====================================================== */}
          <MobileNav />

          {/* =====================================================
              SEARCH
          ====================================================== */}
          <AriaButton
            className="
              group
              flex
              h-10
              min-w-0
              flex-1
              items-center
              gap-2
              rounded-full
              border
              border-gray-950/10
              bg-white
              px-3.5
              text-left
              shadow-sm
              transition-all
              hover:border-gray-950/15
              hover:shadow
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-primary/20
            "
          >
            <Icon>
              <IconSearch
                className="
                  size-[18px]
                  shrink-0
                  text-gray-950/55
                  transition-colors
                  group-hover:text-gray-950/75
                "
              />
            </Icon>

            <span
              className="
                min-w-0
                flex-1
                truncate
                text-sm
                text-gray-950/45
              "
            >
              Search anything...
            </span>

            {/* Mac shortcut */}
            <span
              className="
                hidden
                shrink-0
                rounded-md
                border
                border-gray-950/10
                bg-gray-50
                px-1.5
                py-0.5
                text-[10px]
                font-medium
                text-gray-950/35
                [[data-platform=macos]_&]:block
              "
            >
              ⌘ K
            </span>

            {/* Windows / Linux shortcut */}
            <span
              className="
                hidden
                shrink-0
                rounded-md
                border
                border-gray-950/10
                bg-gray-50
                px-1.5
                py-0.5
                text-[10px]
                font-medium
                text-gray-950/35
                [[data-platform=macos]_&]:hidden
                sm:block
              "
            >
              Ctrl K
            </span>
          </AriaButton>

          {/* =====================================================
              NOTIFICATION
          ====================================================== */}
          <Button
            type="button"
            variant="icon"
            color="white"
            isRounded
            className={{
              base: `
                size-10
                shrink-0
                border
                border-gray-950/10
                bg-white
                shadow-sm
                transition-all
                hover:bg-gray-50
                hover:shadow
              `,
            }}
          >
            <Icon>
              <IconBell className="size-[19px] text-gray-700" />
            </Icon>
          </Button>

          {/* =====================================================
              CREATE POST
          ====================================================== */}
          <CreatePost />

          {/* =====================================================
              PROFILE
          ====================================================== */}
          <ProfileSwitcher />
        </div>
      </div>
    </LazyMotion>
  );
}

/* ================================================================
   PROFILE SWITCHER
================================================================ */

function ProfileSwitcher() {
  return (
    <LazyMotion features={domAnimation}>
      <DialogTrigger>
        {/* =====================================================
            DESKTOP PROFILE BUTTON
        ====================================================== */}
        <AriaButton
          className="
            group
            hidden
            h-10
            shrink-0
            grid-cols-[auto_1fr_auto]
            items-center
            gap-2
            rounded-full
            border
            border-gray-950/10
            bg-white
            px-1.5
            shadow-sm
            transition-all
            hover:border-gray-950/15
            hover:bg-gray-50
            hover:shadow
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-gray-950/10
            lg:grid
          "
        >
          {/* Avatar */}
          <Avatar name="Harry Potter" className="size-8" variant="beam" />

          {/* User information */}
          <div className="min-w-0 text-left leading-tight">
            <p className="truncate text-xs font-semibold text-gray-950">
              Harry Potter
            </p>

            <p className="truncate text-[10px] text-gray-950/45">Designer</p>
          </div>

          {/* Chevron */}
          <span
            className="
              grid
              size-7
              place-items-center
              rounded-full
              border
              border-gray-950/10
              text-gray-950/45
              transition-colors
              group-data-[pressed=true]:bg-gray-100
            "
          >
            <Icon>
              <IconChevronDown
                className="
                  size-4
                  transition-transform
                  duration-300
                  ease-out
                  group-data-[pressed=true]:rotate-180
                "
              />
            </Icon>
          </span>
        </AriaButton>

        {/* =====================================================
            MOBILE PROFILE BUTTON
        ====================================================== */}
        <AriaButton
          aria-label="Open profile switcher"
          className="
            grid
            size-10
            shrink-0
            place-items-center
            rounded-full
            border
            border-gray-950/10
            bg-white
            p-1
            shadow-sm
            transition-all
            hover:bg-gray-50
            hover:shadow
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-gray-950/10
            lg:hidden
          "
        >
          <Avatar name="Harry Potter" variant="beam" className="size-full" />
        </AriaButton>

        {/* =====================================================
            PROFILE MODAL
        ====================================================== */}
        <ModalOverlay
          className="
            grid
            items-center
            justify-items-center
            p-4
          "
        >
          <Modal
            className="
              w-full
              max-w-[380px]
              overflow-hidden
              rounded-2xl
              border
              border-gray-950/10
              bg-background
              p-3
              shadow-2xl
            "
          >
            <Dialog
              aria-label="Profile Switcher"
              className="focus-visible:outline-none"
            >
              {/* =================================================
                  CURRENT PROFILE
              ================================================== */}
              <div
                className="
                  mb-3
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  bg-gray-950/[0.035]
                  p-3
                "
              >
                <Avatar
                  name="Harry Potter"
                  variant="beam"
                  className="size-10 shrink-0"
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold">Harry Potter</p>

                  <p className="text-xs text-gray-950/45">Designer</p>
                </div>
              </div>

              {/* =================================================
                  MODAL HEADER
              ================================================== */}
              <div className="mb-2 px-1">
                <div className="flex items-center gap-2">
                  <Logo className="w-16" />

                  <span className="h-3 w-px bg-gray-950/10" />

                  <div>
                    <h2 className="text-xs font-semibold text-gray-950">
                      Switch profile
                    </h2>

                    <p className="text-[10px] text-gray-950/40">
                      Choose a community
                    </p>
                  </div>
                </div>
              </div>

              {/* =================================================
                  PROFILE LIST
              ================================================== */}
              <div className="space-y-0.5">
                {profiles.map((profile, index) => {
                  const isActive = index === 2;

                  return (
                    <AriaButton
                      key={profile.name}
                      className="
                        group
                        grid
                        min-h-12
                        w-full
                        grid-cols-[auto_1fr_auto]
                        items-center
                        gap-3
                        rounded-xl
                        px-2.5
                        text-left
                        outline-none
                        transition-colors
                        hover:bg-gray-950/[0.04]
                        focus-visible:bg-gray-950/[0.04]
                        data-pressed:bg-gray-950/[0.06]
                      "
                    >
                      {/* Avatar */}
                      <Avatar
                        name={profile.name}
                        className="size-8 shrink-0"
                        variant="beam"
                      />

                      {/* Profile information */}
                      <div className="min-w-0 leading-tight">
                        <p
                          className={cn(
                            "truncate text-sm",
                            isActive
                              ? "font-semibold text-gray-950"
                              : "font-medium text-gray-800"
                          )}
                        >
                          {profile.name}
                        </p>

                        <p className="mt-0.5 text-[11px] text-gray-950/40">
                          Active {profile.date}
                        </p>
                      </div>

                      {/* Active / inactive icon */}
                      {isActive ? (
                        <span
                          className="
                            grid
                            size-7
                            place-items-center
                            rounded-full
                            bg-gray-950
                            text-white
                          "
                        >
                          <Icon>
                            <IconCheck className="size-4" />
                          </Icon>
                        </span>
                      ) : (
                        <span
                          className="
                            grid
                            size-7
                            place-items-center
                            rounded-full
                            text-gray-950/25
                            transition-colors
                            group-hover:text-gray-950/50
                          "
                        >
                          <Icon>
                            <IconChevronRight className="size-4" />
                          </Icon>
                        </span>
                      )}
                    </AriaButton>
                  );
                })}
              </div>

              {/* =================================================
                  CREATE GROUP
              ================================================== */}
              <div className="mt-2 border-t border-gray-950/[0.07] pt-2">
                <CreateGroup />
              </div>
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </LazyMotion>
  );
}

/* ================================================================
   MOBILE NAVIGATION
================================================================ */

const { link, icon } = sidebarStyles();

function MobileNav() {
  return (
    <LazyMotion features={domAnimation}>
      <DialogTrigger>
        {/* Menu button */}
        <Button
          variant="icon"
          color="white"
          isRounded
          className={{
            base: `
              size-10
              shrink-0
              border
              border-gray-950/10
              bg-white
              shadow-sm
              transition-all
              hover:bg-gray-50
              hover:shadow
              md:hidden
            `,
          }}
        >
          <Icon>
            <IconMenu className="size-[19px]" />
          </Icon>
        </Button>

        {/* Mobile drawer */}
        <ModalOverlay>
          <MotionModal
            variants={{
              enter: {
                x: 0,
                transition: {
                  duration: 0.35,
                  ease: TRANSITION_EASINGS.appleEase,
                },
              },

              exit: {
                x: "-100%",
                transition: {
                  duration: 0.25,
                  ease: TRANSITION_EASINGS.appleEase,
                },
              },
            }}
            initial="exit"
            animate="enter"
            exit="exit"
            className="
              h-dvh
              w-[min(86%,--spacing(90))]
              overflow-y-auto
              border-r
              border-gray-950/10
              bg-background
              px-4
              py-4
              shadow-2xl
              will-change-transform
            "
          >
            <Dialog
              aria-label="Mobile Menu"
              className="focus-visible:outline-none"
            >
              {({ close }) => (
                <div>
                  {/* =================================================
                      MOBILE HEADER
                  ================================================== */}
                  <div className="flex h-10 items-center justify-between">
                    <Logo className="w-30" />

                    <Button
                      variant="icon"
                      color="white"
                      isRounded
                      className={{
                        base: "size-9 border border-gray-950/10",
                      }}
                      onPress={close}
                    >
                      <Icon>
                        <IconX className="size-[18px]" />
                      </Icon>
                    </Button>
                  </div>

                  {/* =================================================
                      NAVIGATION
                  ================================================== */}
                  <nav className="mt-6 space-y-1">
                    {links.map((node) => (
                      <Link
                        key={node.to}
                        to={node.to}
                        onClick={close}
                        className={cn(
                          link(),
                          `
                            h-10
                            rounded-xl
                            px-3
                            transition-colors
                            hover:bg-gray-950/[0.04]
                          `
                        )}
                      >
                        <span className="grid size-7 place-items-center">
                          <node.icon className={icon()} />
                        </span>

                        <span className="text-sm font-medium">
                          {node.title}
                        </span>
                      </Link>
                    ))}

                    {/* =================================================
                        LOGOUT
                    ================================================== */}
                    <Link
                      to="/login"
                      onClick={close}
                      className={cn(
                        link({ color: "red" }),
                        `
                          mt-3
                          h-10
                          rounded-xl
                          px-3
                          transition-colors
                          hover:bg-red-50
                        `
                      )}
                    >
                      <span className="grid size-7 place-items-center">
                        <IconLogout className={icon()} />
                      </span>

                      <span className="text-sm font-medium">Logout</span>
                    </Link>
                  </nav>
                </div>
              )}
            </Dialog>
          </MotionModal>
        </ModalOverlay>
      </DialogTrigger>
    </LazyMotion>
  );
}
