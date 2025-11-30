import { Outlet, createFileRoute } from "@tanstack/react-router";
import React from "react";

import { Header } from "@/components/modules/header";
import { ProfileSwitcher } from "@/components/modules/profile-switcher";
import { SecondaryHeader } from "@/components/modules/secondary-header";
import { Topbar } from "@/components/modules/topbar";

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
    <div className="center-grid grid h-svh 2xl:[--container:calc(100svw_-_20%)] lg:[--container:calc(100svw_-_5%)]">
      <div
        className="grid items-start md:gap-x-4"
        style={{
          gridTemplateColumns:
            "[left-sidebar-start] auto [left-sidebar-end content-start] 1fr [content-end right-sidebar-start] auto [right-sidebar-end]",
        }}
      >
        <Header />

        <main className="[--container:initial] [grid-column:content] isolate grid-cols-subgrid grid">
          <div className="bg-background sticky top-0 z-10">
            <Topbar />
          </div>

          <Outlet />
        </main>

        <div className="[grid-column:right-sidebar] space-y-9 hidden lg:block sticky top-0 py-10 max-w-64 w-full">
          <ProfileSwitcher />

          <SecondaryHeader />
        </div>
      </div>
    </div>
  );
}
