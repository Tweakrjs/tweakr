import { describe, it, expect } from "vitest";
import { mergeAll } from "../../src/object/mergeAll";

describe("mergeAll", () => {
  it("merges multiple objects deeply", () => {
    const result = mergeAll([{ a: 1 }, { b: 2 }, { a: 3 }]);
    expect(result).toEqual({ a: 3, b: 2 });
  });

  it("merges nested objects", () => {
    const result = mergeAll([{ a: { b: 1 } }, { a: { c: 2 } }]);
    expect(result).toEqual({ a: { b: 1, c: 2 } });
  });
});
