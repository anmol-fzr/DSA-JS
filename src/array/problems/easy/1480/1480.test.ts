import runningSum from "./1480";
import { describe, expect, test } from "bun:test";

const cases = [
  {
    input: [1, 2, 3, 4],
    output: [1, 3, 6, 10],
  },
  {
    input: [1, 1, 1, 1, 1],
    output: [1, 2, 3, 4, 5],
  },
  {
    input: [3, 1, 2, 10, 1],
    output: [3, 4, 6, 16, 17],
  },
];

describe("2824. Count Pairs Whose Sum is Less than Target", () => {
  test.each(cases)("Tests %#", ({ input, output }) => {
    expect(runningSum(input)).toEqual(output);
  });
});
