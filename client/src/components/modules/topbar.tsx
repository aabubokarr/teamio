import {
  IconBell,
  IconDotsVertical,
  IconLogout,
  IconMenu,
  IconPlus,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { LazyMotion, domAnimation } from "motion/react";
import {
  Button as AriaButton,
  Dialog,
  DialogTrigger,
} from "react-aria-components";

import { Logo } from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ModalOverlay, MotionModal } from "@/components/ui/modal";
import { TRANSITION_EASINGS } from "@/components/utilities/transition";
import { cn } from "@/lib/utils";
import { CreatePost } from "./create-post";
import { headerStyles, links } from "./header";
import { ProfileSwitcher } from "./profile-switcher";
import { SecondaryHeader } from "./secondary-header";

export function Topbar({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full items-center gap-x-2 py-6 md:py-11 md:max-w-130.5 justify-self-center bg-background",
        className
      )}
      {...props}
    >
      <MobileNav />

      <AriaButton className="h-10 border grow border-gray-950/10 px-3 rounded-full w-full flex items-center gap-x-2">
        <Icon>
          <IconSearch className="size-5 text-gray-950/70" />
        </Icon>
        <p className="text-gray-950/40 [[data-platform=macos]_&]:block hidden">
          ⌘K
        </p>
        <p className="block [[data-platform=macos]_&]:hidden text-gray-950/40">
          Ctrl&nbsp;K
        </p>
      </AriaButton>

      <Button type="button" variant="icon" color="white" isRounded>
        <Icon>
          <IconBell className="size-6" />
        </Icon>
      </Button>

      <CreatePost />

      <div className="lg:hidden inline-grid place-items-center shrink-0">
        <ProfileSwitcher />
      </div>
    </div>
  );
}

const { link, icon } = headerStyles();

function MobileNav() {
  return (
    <LazyMotion features={domAnimation}>
      <DialogTrigger>
        <Button
          variant="icon"
          color="white"
          isRounded
          className={{
            base: "md:hidden",
          }}
        >
          <Icon>
            <IconMenu />
          </Icon>
        </Button>

        <ModalOverlay>
          <MotionModal
            variants={{
              enter: {
                x: 0,
                transition: {
                  duration: 0.4,
                  ease: TRANSITION_EASINGS.appleEase,
                },
              },
              exit: {
                x: "-100%",
                transition: {
                  duration: 0.3,
                  ease: TRANSITION_EASINGS.appleEase,
                },
              },
            }}
            initial="exit"
            animate="enter"
            exit="exit"
            className="will-change-transform bg-background h-dvh w-[min(80%,--spacing(98))] py-6 px-4 overflow-y-auto"
          >
            <Dialog
              aria-label="Mobile Menu"
              className="focus-visible:outline-none"
            >
              {({ close }) => (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Logo className="-ml-2.5 w-34" />
                    <Button
                      variant="icon"
                      color="white"
                      isRounded
                      onPress={close}
                    >
                      <Icon>
                        <IconX />
                      </Icon>
                    </Button>
                  </div>
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

                    <Link to="/" className={link({ color: "red" })}>
                      <span>
                        <IconLogout className={icon()} />
                      </span>
                      <span>Logout</span>
                    </Link>
                  </nav>

                  <SecondaryHeader />
                </div>
              )}
            </Dialog>
          </MotionModal>
        </ModalOverlay>
      </DialogTrigger>
    </LazyMotion>
  );
}
