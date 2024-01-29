import getConcatenation from "./1929_concatenation_of_array";
import { describe, expect, test } from "bun:test";
import { Cases } from "../../../types";

type I = number[]
type O = I

const cases:Cases<I,O> = [
  { id: 1, input:[1,2], want:[1,2,1,2] },
  { id: 2, input:[1,2,3], want:[1,2,3,1,2,3] },
]

describe("Get Concatenation Array", () => {
  test.each(cases)("Test", ({id,input,want}) => {
    console.log(id)
    expect(getConcatenation(input)).toEqual(want);
  });
});
