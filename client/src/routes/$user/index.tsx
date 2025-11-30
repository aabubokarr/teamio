import { Post } from "@/components/modules/post";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { getTitle } from "@/lib/utils";
import {
  IconMapPin,
  IconNotes,
  IconPhotoSquareRounded,
  IconVideo,
  IconWorld,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import Avatar from "boring-avatars";

export const Route = createFileRoute("/_layout/$user/")({
  component: RouteComponent,
  head: () => ({
    meta: [
      {
        title: getTitle(),
      },
    ],
  }),
});

function RouteComponent() {
  return (
    <div className="space-y-4 justify-self-center md:w-130">
      <div className="border border-gray-950/10 rounded-3xl">
        <div>
          <Image
            alt="Post"
            src="https://images.unsplash.com/photo-1581291125788-492a2d9b856a?q=80"
            className="object-cover aspect-[4] rounded-t-2xl w-full bg-stone-900 border border-gray-950/10 shadow-xs"
            layout="fullWidth"
          />

          <div className="ring-4 ring-background -mt-13 ml-8 inline-block rounded-full">
            <Avatar name="Harry Potter" className="size-18" variant="beam" />
          </div>
        </div>

        <div className="p-5 pt-1 space-y-2 rounded-3xl">
          <div>
            <h2 className="font-semibold">Marques Brownlee</h2>
            <p className="text-sm text-foreground/75">Lead Product Designer</p>
          </div>

          <div className="grid grid-cols-[auto_1fr] items-center gap-x-1 gap-y-1.5">
            <div className="grid col-span-full grid-cols-subgrid items-center">
              <IconMapPin className="size-5" />
              <p>San Francisco, CA</p>
            </div>
            <div className="grid grid-cols-subgrid items-center col-span-full">
              <IconWorld className="size-5" />
              <a
                href="https://marquesbrownlee.com"
                target="_blank"
                className="underline-offset-4 outline-none hover:underline focus-visible:underline"
              >
                marquesbrownlee.com
              </a>
            </div>
          </div>

          <p className="text-sm leading-relaxed">
            Designing Stunning User Experience & Interface Designer. Working
            with Web 3.0 & SaaS industry
          </p>
        </div>
      </div>

      <div className="border border-gray-950/10 rounded-xl p-2 flex items-center gap-x-2">
        <Button>All</Button>
        <Button color="white">
          <Icon>
            <IconNotes />
          </Icon>
          Post
        </Button>
        <Button color="white">
          <Icon>
            <IconPhotoSquareRounded />
          </Icon>
          Photo
        </Button>
        <Button color="white">
          <Icon>
            <IconVideo />
          </Icon>
          Video
        </Button>
      </div>

      {Array(4)
        .fill({})
        .map((_, index) => (
          <Post id={String(index)} key={index} />
        ))}
    </div>
  );
}
