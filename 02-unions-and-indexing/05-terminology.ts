// A is a discriminated union, with 'type' as the discriminator
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// B is a union, but not a discriminated union
type B = "a" | "b" | "c";

// C is an enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}
