import { describe, it, expect } from "vitest";
import { pickBy } from "../../src/object/pickBy";

describe("pickBy", () => {
  it("filters object properties by predicate", () => {
    const obj = { a: 1, b: "2", c: 3 };
    const result = pickBy(obj, (val) => typeof val === "number");
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("returns empty object if no match", () => {
    const obj = { a: "x", b: "y" };
    const result = pickBy(obj, (val) => typeof val === "number");
    expect(result).toEqual({});
  });
});
