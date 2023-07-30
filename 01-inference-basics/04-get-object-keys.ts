import { Equal, Expect } from "../utils";

const testingFrameworks = {
  vitest: {
    label: "Vitest",
  },
  jest: {
    label: "Jest",
  },
  mocha: {
    label: "Mocha",
  },
};

type TestingFramework = keyof typeof testingFrameworks;

type tests = [Expect<Equal<TestingFramework, "vitest" | "jest" | "mocha">>];
