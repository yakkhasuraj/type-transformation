import { Equal, Expect } from "../utils";

type YouSayGoodbyeAndISayHello<T> = T extends "hello" ? "goodbye" : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
