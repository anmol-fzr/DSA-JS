import smallerNumbersThanCurrent from "./1365";
import { describe, test, expect } from "bun:test";

const cases = [
  {
    input: [8, 1, 2, 2, 3],
    output: [4, 0, 1, 1, 3],
  },
  {
    input: [6, 5, 4, 8],
    output: [2, 1, 0, 3],
  },
  {
    input: [7, 7, 7, 7],
    output: [0, 0, 0, 0],
  },
];

describe("1365. How Many Numbers Are Smaller Than the Current Number", () => {
  test.each(cases)("Test %#", ({ input, output }) =>
    expect(smallerNumbersThanCurrent(input)).toEqual(output),
  );
});
