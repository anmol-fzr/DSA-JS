import sumIndicesWithKSetBits from "./2859";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types.ts";

type I = [number[], number]
type O = number;

const cases: Cases<I, O> = [
  {
    input: [[5, 10, 1, 5, 2], 1],
    want: 13
  },
  {
    input: [[4, 3, 2, 1], 2],
    want: 1
  },
];

describe("Array from Permutation", () => {
  test.each(cases)("Test %#", ({ input, want }) => {
    expect(sumIndicesWithKSetBits(...input)).toEqual(want);
  });
});
