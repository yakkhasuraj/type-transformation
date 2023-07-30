import { Equal, Expect } from "../utils";

interface Example {
  name: string;
  age: number;
  id: string;
  organizationId: string;
  groupId: string;
}

type OnlyIdKeys<T> = {
  [K in keyof T as K extends `${string}${"id" | "Id"}${string}`
    ? K
    : never]: T[K];
};

type tests = [
  Expect<
    Equal<
      OnlyIdKeys<Example>,
      {
        id: string;
        organizationId: string;
        groupId: string;
      }
    >
  >,
  Expect<Equal<OnlyIdKeys<{}>, {}>>
];
