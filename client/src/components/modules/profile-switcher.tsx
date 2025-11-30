import {
  IconCheck,
  IconChevronDown,
  IconChevronRight,
} from "@tabler/icons-react";
import Avatar from "boring-avatars";
import { LazyMotion, domAnimation } from "motion/react";
import { Button, Dialog, DialogTrigger } from "react-aria-components";

import { Logo } from "@/components/icons/logo";
import { CreateGroup } from "@/components/modules/create-group";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay } from "@/components/ui/modal";

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

export function ProfileSwitcher() {
  return (
    <LazyMotion features={domAnimation}>
      <DialogTrigger>
        <Button className="hidden group lg:grid w-full border py-1 px-1.5 grid-cols-[auto_1fr_auto] gap-x-3.5 items-center rounded-[--spacing(11.5)] border-gray-950/10 data-focus-visible:outline-primary-light">
          <Avatar name="Harry Potter" className="size-10" variant="beam" />
          <div className="leading-normal text-left grid grid-cols-1">
            <p className="font-semibold">Harry Potter</p>
            <p className="text-sm text-foreground/75">Designer</p>
          </div>
          <div className="size-10 border-gray-950/10 inline-grid place-items-center rounded-full border">
            <IconChevronDown className="size-5 group-data-pressed:-rotate-180 transition-transform ease-out duration-300" />
          </div>
        </Button>

        <Button className="size-10 lg:hidden rounded-full">
          <Avatar name="Harry Potter" variant="beam" className="size-full" />
        </Button>

        <ModalOverlay className="grid center-grid items-center [--container:min(80%,--spacing(98))]">
          <Modal className="p-3 bg-background rounded-default">
            <Dialog
              aria-label="User Menu"
              className="focus-visible:outline-none space-y-4"
            >
              <div className="flex flex-col justify-center items-center gap-y-2">
                <Logo className="w-25" />
                <div className="text-center">
                  <h2 className="text-sm font-semibold">Switch your profile</h2>
                  <p className="text-xs opacity-70">
                    Enjoy your another community profile
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-y-0.5">
                {profiles.map((profile, index) => (
                  <Button
                    key={index}
                    className="text-left w-full group items-center px-3 py-2 grid grid-cols-[auto_1fr_auto] gap-x-2 outline-none data-focus-visible:bg-gray-100 data-hovered:bg-gray-100 rounded-lg data-active:bg-gray-100 data-pressed:bg-gray-100"
                    data-active={index === 2 || undefined}
                  >
                    <Avatar name={profile.name} className="size-8" />
                    <div className="leadine-none">
                      <p className="font-semibold text-sm">{profile.name}</p>
                      <p className="text-xs opacity-70">{profile.date}</p>
                    </div>
                    <div className="group-data-active:hidden">
                      <Icon>
                        <IconChevronRight className="size-6 text-gray-950/30" />
                      </Icon>
                    </div>
                    <div className="group-data-active:block hidden">
                      <Icon>
                        <IconCheck className="size-6 text-gray-950/30" />
                      </Icon>
                    </div>
                  </Button>
                ))}
              </div>

              <CreateGroup />
            </Dialog>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </LazyMotion>
  );
}
