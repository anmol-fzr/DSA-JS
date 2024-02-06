import findWordsContaining from "./2942_find_words_containg_chars";
import { test, describe, expect } from "bun:test";

const cases = [
  {
    input1: ["leet", "code"],
    input2: "e",
    want: [0, 1],
  },
  {
    input1: ["abc", "bcd", "aaaa", "cbc"],
    input2: "a",
    want: [0, 2],
  },
  {
    input1: ["abc", "bcd", "aaaa", "cbc"],
    input2: "z",
    want: [],
  },
];

describe("2942 Find Words Containing Character", () => {
  test.each(cases)("Tests %#", ({ input1, input2, want }) => {
    expect(findWordsContaining(input1, input2)).toEqual(want);
  });
});
