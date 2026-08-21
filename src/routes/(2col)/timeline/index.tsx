import { createFileRoute } from "@tanstack/react-router";
import React from "react";

import { Post } from "@/features/post/post";

export const Route = createFileRoute("/_2col-layout/timeline")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.body.setAttribute("data-platform", "macos");
    }
  }, []);

  return (
    <div className="my-3 overflow-hidden font-lufga">
      <div className="space-y-3 justify-self-center">
            {Array(10)
              .fill({})
              .map((_, index) => (
                <Post id={String(index)} key={index} />
              ))}
          </div>
    </div>
  );
}
