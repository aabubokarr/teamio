import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_auth")({
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
      <div className="col-span-full h-svh">
        <Outlet />
      </div>
    </div>
  );
}
