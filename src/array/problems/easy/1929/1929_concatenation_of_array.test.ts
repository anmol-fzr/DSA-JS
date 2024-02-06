import getConcatenation from "./1929_concatenation_of_array";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types";

type I = number[];
type O = I;

const cases: Cases<I, O> = [
  { input: [1, 2], want: [1, 2, 1, 2] },
  { input: [1, 2, 3], want: [1, 2, 3, 1, 2, 3] },
];

describe("1929 Get Concatenation Array", () => {
  test.each(cases)("Test %#", ({ input, want }) => {
    expect(getConcatenation(input)).toEqual(want);
  });
});
