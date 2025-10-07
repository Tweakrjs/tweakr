import { describe, it, expect } from "vitest";
import { pickDeep } from "../../src/object/pickDeep";

describe("pickDeep", () => {
  it("picks nested properties by path", () => {
    const obj = { a: { b: 1, c: 2 } };
    const result = pickDeep(obj, ["a.b"]);
    expect(result).toEqual({ a: { b: 1 } });
  });

  it("ignores non-existing paths", () => {
    const obj = { a: { b: 1 } };
    const result = pickDeep(obj, ["a.c"]);
    expect(result).toEqual({});
  });
});
