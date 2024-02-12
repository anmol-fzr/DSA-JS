import numberOfEmployeesWhoMetTarget from "./2798";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input1: [0, 1, 2, 3, 4],
    input2: 2,
    want: 3,
  },
  {
    input1: [5, 1, 4, 2, 2],
    input2: 6,
    want: 0,
  },
];

describe("2798. Number of Employees Who Met the Target", () => {
  test.each(cases)("Tests %#", ({ input1, input2, want }) => {
    expect(numberOfEmployeesWhoMetTarget(input1, input2)).toEqual(want);
  });
});
