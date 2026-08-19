import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/_2col-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  React.useEffect(() => {
    if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
      document.body.setAttribute("data-platform", "macos");
    }
  }, []);

  return (
    <div className="center-grid grid h-svh 2xl:[--container:calc(100svw_-_20%)] lg:[--container:calc(100svw_-_5%)]">
      <div
        className="grid items-start md:gap-x-4"
        style={{
          gridTemplateColumns:
            "[left-sidebar-start] auto [left-sidebar-end content-start] 1fr [content-end right-sidebar-start] auto [right-sidebar-end]",
        }}
      >
        <Sidebar />

        <main>
          <Topbar />

          <Outlet />
        </main>
      </div>
    </div>
  );
}
