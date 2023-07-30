// import type { Split } from "type-fest";
import { Equal, Expect } from "../utils";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King"
];

// type GetSurname<T extends string> = Split<T, " ">[1];
type GetSurname<T> = T extends `${string} ${infer Last}` ? Last : never;

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>
];
