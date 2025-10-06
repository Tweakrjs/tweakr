import { isEmpty } from "../../src/util/isEmpty";

describe("isEmpty", () => {
  it("should detect empty values", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
  });

  it("should detect non-empty values", () => {
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty("a")).toBe(false);
    expect(isEmpty({ a: 1 })).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });
});
