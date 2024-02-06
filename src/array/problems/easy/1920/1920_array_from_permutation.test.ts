import buildArray from "./1920_array_from_permutation.ts";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types.ts";

type I = number[];
type O = I;

const cases: Cases<I, O> = [
  { input: [0, 2, 1, 5, 3, 4], want: [0, 1, 2, 4, 5, 3] },
  { input: [5, 0, 1, 2, 3, 4], want: [4, 5, 0, 1, 2, 3] },
];

describe("Array from Permutation", () => {
  test.each(cases)("Test %#", ({ input, want }) => {
    expect(buildArray(input)).toEqual(want);
  });
});
