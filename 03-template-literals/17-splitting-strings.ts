import type { Split } from "type-fest";

import { Equal, Expect } from "../utils";

type Path = "Users/John/Documents/notes.txt";

type SplitPath = Split<Path, "/">;

type tests = [
  Expect<Equal<SplitPath, ["Users", "John", "Documents", "notes.txt"]>>
];
