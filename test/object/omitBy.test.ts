import { describe, it, expect } from "vitest";
import { omitBy } from "../../src/object/omitBy";

describe("omitBy", () => {
  it("omits object properties by predicate", () => {
    const obj = { a: 1, b: "2", c: 3 };
    const result = omitBy(obj, (val) => typeof val === "number");
    expect(result).toEqual({ b: "2" });
  });

  it("returns same object if no match", () => {
    const obj = { a: "x", b: "y" };
    const result = omitBy(obj, (val) => typeof val === "number");
    expect(result).toEqual({ a: "x", b: "y" });
  });
});
