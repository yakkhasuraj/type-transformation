import { Equal, Expect } from "../utils";

type Route = "/" | "/about" | "/admin" | "/admin/users";

type RoutesObject = {
  [R in Route]: R;
};

type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": "/";
        "/about": "/about";
        "/admin": "/admin";
        "/admin/users": "/admin/users";
      }
    >
  >
];
