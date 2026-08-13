import { index, layout, rootRoute, route } from "@tanstack/virtual-file-routes";

export const routes = rootRoute("root.tsx", [
  layout("layout.tsx", [
    index("index.tsx"),
    route("/$user", [index("$user/index.tsx")]),
    route("/$user/status/$id", "$user/status/$id/index.tsx"),
  ]),
  layout("2col-layout", "(2col)/layout.tsx", [
    route("/managements", "(2col)/managements/index.tsx"),
    route("/messages", "(2col)/messages/index.tsx"),
    route("/members", "(2col)/members/index.tsx"),
    route("/calendar", "(2col)/calendar/index.tsx"),
    route("/settings", "(2col)/settings/index.tsx"),
  ]),
  layout("auth", "(auth)/layout.tsx", [
    route("/login", "(auth)/login/index.tsx"),
  ]),
]);
