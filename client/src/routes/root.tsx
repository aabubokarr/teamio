import { BreakpointIndicator } from "@/components/ui/breakpoint-indicator";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import { ErrorComponent } from "@/components/modules/error";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <ErrorComponent message="The page you are looking for does not exist." />
    );
  },
});

function RootComponent() {
  return (
    <>
      <HeadContent />
      <Outlet />
      <BreakpointIndicator />
      <Scripts />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}
