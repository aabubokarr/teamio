import { createFileRoute } from "@tanstack/react-router";

import { Post } from "@/features/post/post";
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
    <div className="space-y-4 my-3 justify-self-center">
      {Array(10)
        .fill({})
        .map((_, index) => (
          <Post id={String(index)} key={index} />
        ))}
    </div>
  );
}
