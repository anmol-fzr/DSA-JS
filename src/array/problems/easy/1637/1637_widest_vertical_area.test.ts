import maxWidthOfVerticalArea from "./1637_widest_vertical_area";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input: [
      [8, 7],
      [9, 9],
      [7, 4],
      [9, 7],
    ],
    want: 1,
  },
  {
    input: [
      [3, 1],
      [9, 0],
      [1, 0],
      [1, 4],
      [5, 3],
      [8, 8],
    ],
    want: 3,
  },
];

describe("1521 Array of Good Pairs", () => {
  test.each(cases)("Tests %#", ({ input, want }) => {
    expect(maxWidthOfVerticalArea(input)).toEqual(want);
  });
});
