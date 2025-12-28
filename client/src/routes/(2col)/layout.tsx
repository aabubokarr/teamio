import { Header } from "@/components/modules/header";
import { ProfileSwitcher } from "@/components/modules/profile-switcher";
import { Topbar } from "@/components/modules/topbar";
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
        <Header />

        <main className="[grid-column:content] isolate grid-cols-1 lg:grid-cols-[1fr_--spacing(64)] gap-x-4 grid [--container:initial]">
          <div className="grid-cols-subgrid grid col-span-full sticky top-0 bg-background z-10">
            <Topbar className="md:py-10" />

            <div className="sticky top-0 py-6 md:py-10 hidden lg:block">
              <ProfileSwitcher />
            </div>
          </div>

          <div className="col-span-full">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
