import { Equal, Expect } from "../utils";

const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

type FakeDataDefaults = typeof fakeDataDefaults;

type StringType = FakeDataDefaults["String"];
type IntType = FakeDataDefaults["Int"];
type FloatType = FakeDataDefaults["Float"];
type BooleanType = FakeDataDefaults["Boolean"];
type IDType = FakeDataDefaults["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];
