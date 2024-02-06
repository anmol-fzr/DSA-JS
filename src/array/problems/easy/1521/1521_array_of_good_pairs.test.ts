import numIdenticalPairs from "./1521_array_of_good_pairs";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input: [1, 2, 3, 1, 1, 3],
    want: 4,
  },
  {
    input: [1, 1, 1, 1],
    want: 6,
  },
  {
    input: [1, 2, 3],
    want: 0,
  },
];

describe("1521 Array of Good Pairs", () => {
  test.each(cases)("Tests %#", ({ input, want }) => {
    expect(numIdenticalPairs(input)).toEqual(want);
  });
});
