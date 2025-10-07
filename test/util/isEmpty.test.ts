import { isEmpty } from "../../src/util/isEmpty";

describe("isEmpty", () => {
  it("should handle various edge cases", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    expect(isEmpty("abc")).toBe(false);
    expect(isEmpty([1])).toBe(false);
    expect(isEmpty({ key: 1 })).toBe(false);
    expect(isEmpty(new Map([["a", 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(false)).toBe(false);
  });
});
