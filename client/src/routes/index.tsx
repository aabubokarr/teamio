import { createFileRoute } from "@tanstack/react-router";

import { Post } from "@/components/modules/post";
import { getTitle } from "@/lib/utils";

export const Route = createFileRoute("/_layout/")({
  component: Page,
  head: () => ({
    meta: [
      {
        title: getTitle("Home"),
      },
    ],
  }),
});

function Page() {
  return (
    <div className="space-y-4 mb-10 justify-self-center md:w-130">
      {Array(10)
        .fill({})
        .map((_, index) => (
          <Post id={String(index)} key={index} />
        ))}
    </div>
  );
}
