import getConcatenation from "./1929_concatenation_of_array";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types";

const cases:Cases = [
  [1, [1,2], [1,2,1,2] ],
  [2, [1,2,3], [1,2,3,1,2,3] ],
]

describe("Get Concatenation Array", () => {
  test.each(cases)("Test %d", (_,inp,out) => {
    expect(getConcatenation(inp)).toEqual(out);
  });
});
