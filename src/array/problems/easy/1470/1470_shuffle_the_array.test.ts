import shuffle from "./1470_shuffle_the_array";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input1: [1, 1, 2, 2],
    input2: 2,
    want: [1, 2, 1, 2],
  },
  {
    input1: [2, 5, 1, 3, 4, 7],
    input2: 3,
    want: [2, 3, 5, 4, 1, 7],
  },
  {
    input1: [1, 2, 3, 4, 4, 3, 2, 1],
    input2: 4,
    want: [1, 4, 2, 3, 3, 2, 4, 1],
  },
];

describe("1470 Shuffle the Array", () => {
  test.each(cases)("Tests %#", ({ input1, input2, want }) => {
    expect(shuffle(input1, input2)).toEqual(want);
  });
});
