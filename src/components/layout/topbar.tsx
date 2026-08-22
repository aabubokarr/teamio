import {
  IconBell,
  IconCheck,
  IconChevronDown,
  IconChevronRight,
  IconLogout,
  IconMenu,
  IconSearch,
  IconX,
  IconSparkles,
} from "@tabler/icons-react";

import { Link } from "@tanstack/react-router";
import { LazyMotion, domAnimation } from "motion/react";

import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
} from "react-aria-components";

import { Logo } from "@/components/icons/logo";
import { CreatePost } from "@/features/post/create-post";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay, MotionModal } from "@/components/ui/modal";

import { TRANSITION_EASINGS } from "@/components/utilities/transition";

import { sidebarStyles, links } from "@/components/layout/sidebar";
import { cn } from "@/lib/utils";

const profiles = [
  {
    name: "Maya Rahman",
    role: "Lead Product Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
    active: true,
  },
  {
    name: "Alex Carter",
    role: "Frontend Engineer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
    active: false,
  },
  {
    name: "Sarah Wilson",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
    active: false,
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
            border-slate-200/80
            bg-white/95
            backdrop-blur-md
            px-4
            font-sans
          `,
          className
        )}
        {...props}
      >
        <div className="flex w-full items-center gap-3 py-3">
          {/* Mobile Menu */}
          <MobileNav />

          {/* Search */}
          <AriaButton
            className="
              group
              flex
              h-10
              min-w-0
              flex-1
              items-center
              gap-2.5
              rounded-2xl
              border
              border-slate-200
              bg-slate-50
              px-3.5
              text-left
              shadow-xs
              transition-all
              hover:border-indigo-300
              hover:bg-white
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-indigo-500/20
            "
          >
            <Icon>
              <IconSearch className="size-[17px] shrink-0 text-slate-400 transition-colors group-hover:text-indigo-600" />
            </Icon>

            <span className="min-w-0 flex-1 truncate text-xs font-medium text-slate-500">
              Search team, tasks, DMs or files...
            </span>

            <span className="hidden shrink-0 rounded-lg border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-bold text-slate-400 sm:block">
              ⌘ K
            </span>
          </AriaButton>

          {/* Notification Button */}
          <div className="relative">
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
                  border-slate-200
                  bg-white
                  shadow-xs
                  transition-all
                  hover:bg-slate-50
                `,
              }}
            >
              <Icon>
                <IconBell className="size-[18px] text-slate-700" />
              </Icon>
            </Button>
            <span className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-indigo-600 ring-2 ring-white" />
          </div>

          {/* Create Post Action */}
          <CreatePost />

          {/* Profile Switcher */}
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
        {/* Desktop Profile Button */}
        <AriaButton
          className="
            group
            hidden
            h-10
            shrink-0
            grid-cols-[auto_1fr_auto]
            items-center
            gap-2.5
            rounded-2xl
            border
            border-slate-200
            bg-white
            px-2
            shadow-xs
            transition-all
            hover:border-indigo-300
            hover:bg-slate-50
            focus-visible:outline-none
            lg:grid
          "
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Maya Rahman"
            className="size-7 rounded-xl object-cover"
          />

          <div className="min-w-0 text-left leading-tight">
            <p className="truncate text-xs font-bold text-slate-900">
              Maya Rahman
            </p>
            <p className="truncate text-[10px] text-indigo-600 font-semibold">Lead Designer</p>
          </div>

          <span className="grid size-6 place-items-center rounded-lg text-slate-400">
            <Icon>
              <IconChevronDown className="size-4 transition-transform duration-200 group-data-[pressed=true]:rotate-180" />
            </Icon>
          </span>
        </AriaButton>

        {/* Mobile Profile Button */}
        <AriaButton
          aria-label="Open profile switcher"
          className="grid size-10 shrink-0 place-items-center rounded-2xl border border-slate-200 bg-white p-0.5 shadow-xs lg:hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Maya Rahman"
            className="size-full rounded-xl object-cover"
          />
        </AriaButton>

        {/* Profile Modal */}
        <ModalOverlay className="grid items-center justify-items-center p-4">
          <Modal className="w-full max-w-[380px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl">
            <Dialog aria-label="Profile Switcher" className="focus-visible:outline-none font-sans">
              
              {/* Current Profile Card */}
              <div className="mb-4 flex items-center gap-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 p-3">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Maya Rahman"
                  className="size-11 rounded-2xl object-cover shrink-0 ring-2 ring-indigo-500/20"
                />
                <div className="min-w-0">
                  <p className="truncate text-xs font-black text-slate-900">Maya Rahman</p>
                  <p className="text-[11px] font-semibold text-indigo-600">Lead Product Designer @ Teamio</p>
                </div>
              </div>

              {/* Header */}
              <div className="mb-3 flex items-center justify-between px-1">
                <span className="text-xs font-bold text-slate-900 flex items-center gap-1">
                  <IconSparkles size={14} className="text-indigo-600" /> Switch Team Member
                </span>
                <span className="text-[10px] text-slate-400 font-medium">3 Online</span>
              </div>

              {/* Profiles */}
              <div className="space-y-1">
                {profiles.map((profile) => (
                  <AriaButton
                    key={profile.name}
                    className={`group flex items-center gap-3 w-full rounded-2xl p-2.5 text-left outline-none transition ${
                      profile.active ? "bg-slate-100 border border-slate-200" : "hover:bg-slate-50"
                    }`}
                  >
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="size-9 rounded-xl object-cover shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <p className={`truncate text-xs ${profile.active ? "font-bold text-slate-900" : "font-semibold text-slate-700"}`}>
                        {profile.name}
                      </p>
                      <p className="text-[10px] text-slate-500 truncate">{profile.role}</p>
                    </div>

                    {profile.active ? (
                      <span className="flex size-6 items-center justify-center rounded-full bg-indigo-600 text-white">
                        <IconCheck size={14} />
                      </span>
                    ) : (
                      <IconChevronRight size={16} className="text-slate-400" />
                    )}
                  </AriaButton>
                ))}
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
        <Button
          variant="icon"
          color="white"
          isRounded
          className={{
            base: `
              size-10
              shrink-0
              border
              border-slate-200
              bg-white
              shadow-xs
              transition-all
              hover:bg-slate-50
              md:hidden
            `,
          }}
        >
          <Icon>
            <IconMenu className="size-[19px]" />
          </Icon>
        </Button>

        <ModalOverlay>
          <MotionModal
            variants={{
              enter: {
                x: 0,
                transition: {
                  duration: 0.3,
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
              border-slate-200
              bg-white
              p-4
              shadow-2xl
              font-sans
            "
          >
            <Dialog aria-label="Mobile Menu" className="focus-visible:outline-none">
              {({ close }) => (
                <div>
                  <div className="flex h-10 items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <Logo className="size-6 shrink-0" />
                      <span className="text-base font-black text-slate-900">Teamio</span>
                    </div>

                    <Button
                      variant="icon"
                      color="white"
                      isRounded
                      className={{
                        base: "size-8 border border-slate-200",
                      }}
                      onPress={close}
                    >
                      <Icon>
                        <IconX className="size-4" />
                      </Icon>
                    </Button>
                  </div>

                  <nav className="mt-4 space-y-1">
                    {links.map((node) => (
                      <Link
                        key={node.to}
                        to={node.to}
                        onClick={close}
                        className={cn(
                          link(),
                          "h-10 rounded-xl px-3 hover:bg-slate-100"
                        )}
                      >
                        <span className="grid size-7 place-items-center">
                          <node.icon className={icon()} />
                        </span>
                        <span className="text-xs font-bold">{node.title}</span>
                      </Link>
                    ))}

                    <Link
                      to="/login"
                      onClick={close}
                      className={cn(
                        link({ color: "red" }),
                        "mt-3 h-10 rounded-xl px-3 hover:bg-rose-50"
                      )}
                    >
                      <span className="grid size-7 place-items-center">
                        <IconLogout className={icon()} />
                      </span>
                      <span className="text-xs font-bold">Logout</span>
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
