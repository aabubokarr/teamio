import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Modal, ModalOverlay } from "@/components/ui/modal";
import {
  IconArrowRight,
  IconPhotoPlus,
  IconPlus,
  IconX,
} from "@tabler/icons-react";
import Avatar from "boring-avatars";
import { Dialog, DialogTrigger } from "react-aria-components";

function CreatePost() {
  return (
    <DialogTrigger>
      <Button type="button" variant="icon" color="white" isRounded>
        <Icon>
          <IconPlus className="size-6" />
        </Icon>
      </Button>

      <ModalOverlay className="grid center-grid items-center md:[--container:min(--spacing(150),70%)] lg:[--container:min(--spacing(150),50%)]">
        <Modal className="bg-white p-3 rounded-default">
          <Dialog
            aria-label="Create Post"
            className="focus-visible:outline-none space-y-4"
          >
            {({ close }) => (
              <>
                <div className="grid grid-cols-[auto_1fr_auto] items-start gap-x-3">
                  <Avatar
                    name="Harry Potter"
                    variant="beam"
                    className="size-8"
                  />
                  <div>
                    <p className="text-sm font-semibold">Marques Brownlee</p>
                    <p className="text-xs opacity-70">Content Creator</p>
                  </div>
                  <Button
                    variant="icon"
                    color="white"
                    isRounded
                    onPress={close}
                  >
                    <Icon>
                      <IconX className="size-4" />
                    </Icon>
                  </Button>
                </div>

                <textarea
                  autoFocus
                  className="field-sizing-content w-full min-h-[3lh] outline-none placeholder:text-foreground/50 resize-none max-h-[10lh]"
                  placeholder="Write your heart"
                />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-2">
                    <Button variant="icon" color="white" isRounded>
                      <Icon>
                        <IconPhotoPlus />
                      </Icon>
                    </Button>
                  </div>

                  <Button isRounded variant="fancy" color="black">
                    Post
                    <Icon>
                      <IconArrowRight />
                    </Icon>
                  </Button>
                </div>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
}

export { CreatePost };
