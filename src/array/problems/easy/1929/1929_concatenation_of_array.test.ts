import getConcatenation from "./1929_concatenation_of_array";
import { describe, expect, test } from "bun:test";

const cases = [ [[1,2],[1,2,1,2]], [[1,2,3],[1,2,3,1,2,3]] ]

describe("Get Concatenation Array", () => {
  test.each(cases)("Tests", (inp,out) => {
    expect(getConcatenation(inp)).toEqual(out);
  });
});
