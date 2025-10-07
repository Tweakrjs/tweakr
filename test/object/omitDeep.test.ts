import { describe, it, expect } from "vitest";
import { omitDeep } from "../../src/object/omitDeep";

describe("omitDeep", () => {
  it("omits nested properties by path", () => {
    const obj = { a: { b: 1, c: 2 } };
    const result = omitDeep(obj, ["a.b"]);
    expect(result).toEqual({ a: { c: 2 } });
  });

  it("ignores non-existing paths", () => {
    const obj = { a: { b: 1 } };
    const result = omitDeep(obj, ["a.c"]);
    expect(result).toEqual({ a: { b: 1 } });
  });
});
