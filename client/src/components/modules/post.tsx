import {
  IconBookmark,
  IconCirclesRelation,
  IconDotsVertical,
  IconExclamationCircle,
  IconEyeOff,
  IconMapPin,
  IconTrash,
  IconWorld,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import Avatar from "boring-avatars";
import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { useHover } from "react-aria";
import { Pressable, Tooltip, TooltipTrigger } from "react-aria-components";

import { LikeIcon } from "@/components/icons/like";
import { MessageIcon } from "@/components/icons/message";
import { SendIcon } from "@/components/icons/send";
import { Send2Icon } from "@/components/icons/send-2";
import { Button, buttonStyles } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import {
  Menu,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";
import { focusRingStyles } from "@/components/ui/primitive";
import { cn } from "@/lib/utils";

export interface PostProps {
  id: string;
  view?: "list" | "standalone";
}
export function Post({ id, view = "list" }: PostProps) {
  return (
    <div
      className={cn(
        "grid stack isolate pt-0.5",
        {
          "rounded-3xl border border-gray-950/10 shadow-xs has-[[data-slot=post-link]:focus-visible]:border-gray-950/30":
            view === "list",
        },
        {
          "md:w-130 justify-self-center mb-10 space-y-4": view === "standalone",
        }
      )}
    >
      {/* <ModalOverlay
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        isDismissable
        className="fixed inset-0 isolate bg-[rgba(0,0,0,0.1)] backdrop-blur-xs"
      >
        <Modal isDismissable>
          <Dialog className="grid grid-cols-[75%_25%] outline-none">
            {({ close }) => (
              <>
                <div className="fixed z-1 left-5 top-5">
                  <Button variant="icon" isRounded onPress={close}>
                    <Icon>
                      <IconX className="size-5" /> </Icon>
                  </Button>
                </div>

                <Image
                  alt="Post"
                  src="https://images.unsplash.com/photo-1541185933-55ad9888f1df?q=80"
                  className="object-contain h-auto w-auto max-w-full max-h-svh mx-auto"
                  layout="fullWidth"
                />

                <div className="bg-background">
                  <h1>Hi</h1>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay> */}
      {view === "list" && (
        <Link
          to="/$user/status/$id"
          params={{
            user: "marques",
            id,
          }}
          className="z-1 focus-visible:outline-none rounded-[inherit]"
          data-slot="post-link"
        >
          <span className="sr-only">Go to post "title"</span>
        </Link>
      )}

      <div className={cn("space-y-3.5", { "p-4.5": view === "list" })}>
        <div className="flex items-start justify-between w-full">
          <div className="flex items-center gap-x-2">
            <HoverProfile />

            <div className="leading-normal grid grid-cols-1">
              <Link
                to="/$user"
                params={{ user: "marques" }}
                className="z-2 hover:underline focus-visible:underline underline-offset-4 font-semibold focus-visible:outline-none"
              >
                Marques Brownlee
              </Link>
              <p className="text-sm text-foreground/75">
                Lead Product Designer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-3">
            <p className="text-sm">2w ago</p>
            <MenuTrigger>
              <Button
                variant="icon"
                isRounded
                color="white"
                className={{
                  label: "p-1 *:data-[slot=icon]:size-4",
                  base: "z-1",
                }}
              >
                <p className="sr-only">See More</p>
                <Icon>
                  <IconDotsVertical className="size-5" />
                </Icon>
              </Button>

              <Menu offset={12} crossOffset={-100} placement="bottom end">
                <MenuItem>
                  <Icon>
                    <IconExclamationCircle />
                  </Icon>
                  <MenuLabel>Report</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <IconBookmark />
                  </Icon>
                  <MenuLabel>Save</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <IconCirclesRelation />
                  </Icon>
                  <MenuLabel>Copy Link</MenuLabel>
                </MenuItem>
                <MenuItem>
                  <Icon>
                    <IconEyeOff />
                  </Icon>
                  <MenuLabel>Hide Post</MenuLabel>
                </MenuItem>
                <MenuSeparator />
                <MenuItem variant="danger">
                  <Icon>
                    <IconTrash />
                  </Icon>
                  <MenuLabel>Delete Post</MenuLabel>
                </MenuItem>
              </Menu>
            </MenuTrigger>
          </div>
        </div>

        <p className="text-sm leading-relaxed">
          Just wrapped up an exciting design sprint for our new Web3 platform!
          🚀 The team and I have been focusing on creating a seamless user
          experience that bridges the gap between traditional web interfaces and
          blockchain technology. Really proud of how the UI is shaping up -
          clean, intuitive, and accessible. Would love to hear your thoughts on
          the direction we're taking. #DesignThinking #Web3 #UXDesign
        </p>

        <Image
          alt="Post"
          src="https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80"
          className="object-cover relative z-2 aspect-[1.83/1] rounded-2xl w-full"
          layout="fullWidth"
        />

        <div className="flex items-center gap-x-2 text-gray-500">
          <p className="z-2 text-xs">30K Likes</p>
          <p>&middot;</p>
          <p className="text-xs z-2">15k Comments</p>
        </div>

        <div className="flex items-center gap-x-2">
          <button
            type="button"
            className="size-10 text-foreground/70 bg-[#F9F9F9] rounded-full inline-grid place-items-center"
          >
            <Send2Icon className="size-6" />
          </button>
          <button
            type="button"
            className="size-10 text-foreground/70 bg-[#F9F9F9] rounded-full inline-grid place-items-center"
          >
            <LikeIcon className="size-6" />
          </button>
          <div className="grid isolate grow grid-cols-[--spacing(9)_1fr_--spacing(9)] content-stretch items-center rounded-full">
            <MessageIcon className="col-start-1 row-start-1 ml-3 size-6 text-foreground/70 z-2 pointer-events-none" />
            <input
              className="col-span-3 col-start-1 row-start-1 h-10 rounded-full bg-[#F9F9F9] px-12 placeholder:text-gray-950/40"
              placeholder="Write something..."
            />
            <SendIcon className="col-start-3 row-start-1 mr-3 size-6 text-foreground/70" />
          </div>
        </div>
      </div>
    </div>
  );
}

const MotionHoverProfileContent = motion.create(HoverProfileContent);

export function HoverProfile() {
  const [open, setOpen] = React.useState(false);

  return (
    <TooltipTrigger
      delay={300}
      closeDelay={300}
      isOpen={open}
      onOpenChange={setOpen}
    >
      <Pressable>
        <Link
          className={focusRingStyles({ className: "z-2 rounded-full" })}
          to="/$user"
          params={{ user: "marques" }}
          tabIndex={-1}
        >
          <Avatar name="Harry Potter" className="size-9" variant="beam" />
        </Link>
      </Pressable>

      <AnimatePresence>
        {open && (
          <MotionHoverProfileContent
            variants={{
              enter: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
              exit: {
                opacity: 0,
                y: 10,
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
              mass: 0.8,
            }}
          />
        )}
      </AnimatePresence>
    </TooltipTrigger>
  );
}

function HoverProfileContent(props: React.ComponentProps<typeof Tooltip>) {
  return (
    <Tooltip
      isOpen
      {...props}
      offset={12}
      className="bg-background will-change-transform rounded-default origin-top-left shadow-2xl min-w-50 max-w-80 px-3.5 py-4 border border-gray-950/20 space-y-3"
      placement="bottom left"
    >
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-x-2">
          <Avatar
            name="Harry Potter"
            className="size-10 rounded-full"
            variant="beam"
          />
          <div>
            <p className="font-semibold">Marques Brownlee</p>
            <p className="text-sm text-foreground/75">Lead Product Designer</p>
          </div>
        </div>

        <MessageButton />
      </div>

      <p className="text-sm text-balanced">
        Designing Stunning User Experience & Interface Designer. Working with
        Web 3.0 & SaaS industry
      </p>

      <div className="grid grid-cols-[auto_1fr] items-center gap-1">
        <div className="grid col-span-full grid-cols-subgrid items-center">
          <IconMapPin className="size-4" />{" "}
          <p className="text-sm">San Francisco, CA</p>
        </div>
        <div className="grid grid-cols-subgrid items-center col-span-full">
          <IconWorld className="size-4" />
          <a
            href="https://marquesbrownlee.com"
            target="_blank"
            className="text-sm underline-offset-4 outline-none hover:underline focus-visible:underline"
          >
            marquesbrownlee.com
          </a>
        </div>
      </div>
    </Tooltip>
  );
}

function MessageButton() {
  const { hoverProps, isHovered } = useHover({});

  return (
    <Link
      to="/"
      className={buttonStyles().base({
        variant: "icon",
        color: "white",
        isRounded: true,
      })}
      {...hoverProps}
      data-hovered={isHovered || undefined}
    >
      <span className="sr-only">Message user</span>
      <span
        className={buttonStyles().label({
          variant: "icon",
          color: "white",
          isRounded: true,
        })}
      >
        <Icon>
          <MessageIcon />
        </Icon>
      </span>
    </Link>
  );
}
