import { Split } from "type-fest";
import { Equal, Expect } from "../utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type ExtractPathParams<TPath extends string> = {
  [K in Split<TPath, "/">[number] as K extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
