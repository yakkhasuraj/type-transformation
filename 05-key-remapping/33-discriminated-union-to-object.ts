import { Equal, Expect } from "../utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about"; search: {} }
  | { route: "/admin"; search: {} }
  | { route: "/admin/users"; search: {} };

// type RoutesObject = {
//   [R in Route["route"]]: Extract<Route, { route: R }>["search"];
// };

type RoutesObject = {
  [R in Route as R["route"]]: R["search"];
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": {};
        "/admin": {};
        "/admin/users": {};
      }
    >
  >
];
