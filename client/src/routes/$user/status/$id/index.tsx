import { IconDotsVertical } from "@tabler/icons-react";
import { createFileRoute, Link } from "@tanstack/react-router";

import { LikeIcon } from "@/components/icons/like";
import { MessageIcon } from "@/components/icons/message";
import { SendIcon } from "@/components/icons/send";
import { HoverProfile, Post } from "@/components/modules/post";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

export const Route = createFileRoute("/_layout/$user/status/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();

  return (
    <>
      <Post id={id} view="standalone" />

      <div className="grid grid-cols-1 gap-y-6 justify-self-center md:w-130 mb-10">
        {Array(3)
          .fill({})
          .map((_, index) => (
            <div key={index} className="space-y-2.5">
              <div className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-x-2">
                <HoverProfile />

                <div className="leading-normal grid grid-cols-1">
                  <Link
                    to="/$user"
                    params={{ user: "marques" }}
                    className="z-1 focus-visible:underline underline-offset-4 font-semibold focus-visible:outline-none"
                  >
                    Marques Brownlee
                  </Link>
                  <p className="text-sm text-foreground/75">
                    Lead Product Designer
                  </p>
                </div>
                <p className="text-sm">2w ago</p>
                <Button
                  variant="icon"
                  isRounded
                  color="white"
                  className={{
                    label: "p-1",
                  }}
                >
                  <p className="sr-only">See More</p>
                  <Icon>
                    <IconDotsVertical className="size-5" />
                  </Icon>
                </Button>
              </div>

              <p className="text-sm leading-relaxed">
                Thanks for sharing this! 🙌
              </p>

              <div className="flex items-center gap-x-2">
                <Button variant="icon" color="stone" isRounded>
                  <Icon>
                    <LikeIcon />
                  </Icon>
                </Button>

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
          ))}
      </div>
    </>
  );
}
