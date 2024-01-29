import numIdenticalPairs from "./1521_array_of_good_pairs";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    id: 1,
    input: [1, 2, 3, 1, 1, 3],
    want: 4,
  },
  {
    id: 2,
    input: [1, 1, 1, 1],
    want: 6,
  },
  {
    id: 3,
    input: [1, 2, 3],
    want: 0,
  },
];

describe("1521 Array of Good Pairs", () => {
  test.each(cases)("Tests", ({ id, input, want }) => {
    console.log("Test ", id);
    expect(numIdenticalPairs(input)).toEqual(want);
  });
});
