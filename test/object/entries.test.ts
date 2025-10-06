import { entries } from "../../src/object/entries";

describe("entries", () => {
  it("should return object entries", () => {
    const obj = { a: 1, b: 2 };
    expect(entries(obj)).toEqual([
      ["a", 1],
      ["b", 2],
    ]);
  });
});
