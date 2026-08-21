import { Outlet, createFileRoute } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_layout")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.body.setAttribute("data-platform", "macos");
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}
