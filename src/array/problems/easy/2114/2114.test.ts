import mostWordsFound from "./2114.ts";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types.ts";

type I = string[];
type O = number;

const cases: Cases<I, O> = [
  {
    input: ["alice and bob love leetcode", "i think so too", "this is great thanks very much"], want: 6
  },
  { input: ["please wait", "continue to fight", "continue to win"], want: 3 },
];

describe("Array from Permutation", () => {
  test.each(cases)("Test %#", ({ input, want }) => {
    expect(mostWordsFound(input)).toEqual(want);
  });
});
