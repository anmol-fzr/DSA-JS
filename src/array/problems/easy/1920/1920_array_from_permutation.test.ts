import buildArray from "./1920_array_from_permutation.ts"
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types.ts";

const cases: Cases = [
  [1, [0, 2, 1, 5, 3, 4], [0, 1, 2, 4, 5, 3]],
  [2, [5, 0, 1, 2, 3, 4], [4, 5, 0, 1, 2, 3]]
];

describe("Array from Permutation", () => {
  test.each(cases)("Test %d ", (_, b, c) => {
    expect(buildArray(b)).toEqual(c)
  })
})
