import countPairs from "./2824";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input1: [-1, 1, 2, 3, 1],
    input2: 2,
    want: 3,
  },
  {
    input1: [-6, 2, 5, -2, -7, -1, 3],
    input2: -2,
    want: 10,
  },
];

describe("2824. Count Pairs Whose Sum is Less than Target", () => {
  test.each(cases)("Tests %#", ({ input1, input2, want }) => {
    expect(countPairs(input1, input2)).toEqual(want);
  });
});
