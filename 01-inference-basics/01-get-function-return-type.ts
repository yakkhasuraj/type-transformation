import { Equal, Expect } from "../utils";

const myFunc = () => {
  return "hello";
};

type MyFuncReturn = ReturnType<typeof myFunc>;

type tests = [Expect<Equal<MyFuncReturn, string>>];
