import { isEmpty } from "../../src/util/isEmpty";

describe("isEmpty", () => {
  it("should handle null and undefined", () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  it("should handle strings", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty("abc")).toBe(false);
  });

  it("should handle arrays", () => {
    expect(isEmpty([])).toBe(true);
    expect(isEmpty([1])).toBe(false);
  });

  it("should handle objects", () => {
    expect(isEmpty({})).toBe(true);
    expect(isEmpty({ key: 1 })).toBe(false);

    // Nested empty object should not be considered empty at top level
    expect(isEmpty({ nested: {} })).toBe(false);

    // Non-enumerable properties do not count
    const obj: any = {};
    Object.defineProperty(obj, "hidden", { value: 1, enumerable: false });
    expect(isEmpty(obj)).toBe(true);
  });

  it("should handle Map and Set", () => {
    expect(isEmpty(new Map())).toBe(true);
    expect(isEmpty(new Set())).toBe(true);

    expect(isEmpty(new Map([["a", 1]]))).toBe(false);
    expect(isEmpty(new Set([1]))).toBe(false);
  });

  it("should treat numbers, booleans, functions, and symbols as non-empty", () => {
    expect(isEmpty(0)).toBe(false);
    expect(isEmpty(42)).toBe(false);
    expect(isEmpty(false)).toBe(false);
    expect(isEmpty(true)).toBe(false);
    expect(isEmpty(() => {})).toBe(false);
    expect(isEmpty(Symbol("id"))).toBe(false);
  });

  it("should handle arguments object", () => {
    function testArgs() {
      expect(isEmpty(arguments)).toBe(true);
    }
    testArgs();
    function testArgsNonEmpty(a: number) {
      expect(isEmpty(arguments)).toBe(false);
    }
    testArgsNonEmpty(1);
  });
});
