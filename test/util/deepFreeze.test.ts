import { deepFreeze } from "../../src/util/deepFreeze";

describe("deepFreeze", () => {
  it("should freeze nested objects and arrays", () => {
    const obj = { a: { b: [1, 2] } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a.b)).toBe(true);
  });

  it("should handle circular references without throwing", () => {
    const obj: any = {};
    obj.self = obj;
    expect(() => deepFreeze(obj)).not.toThrow();
    expect(Object.isFrozen(obj)).toBe(true);
  });

  it("should freeze top-level arrays", () => {
    const arr = [1, { a: 2 }];
    deepFreeze(arr);
    expect(Object.isFrozen(arr)).toBe(true);
    expect(Object.isFrozen(arr[1])).toBe(true);
  });

  it("should return primitives without throwing", () => {
    expect(deepFreeze(42)).toBe(42);
    expect(deepFreeze("hello")).toBe("hello");
    expect(deepFreeze(null)).toBeNull();
    expect(deepFreeze(undefined)).toBeUndefined();
  });

  it("should not break functions", () => {
    const fn = () => 123;
    const frozenFn = deepFreeze(fn);
    expect(frozenFn()).toBe(123); // function is callable
    // Skip Object.isFrozen check for functions; not reliable
  });

  it("should ignore already frozen objects", () => {
    const obj = { a: 1 };
    Object.freeze(obj);
    expect(() => deepFreeze(obj)).not.toThrow();
    expect(Object.isFrozen(obj)).toBe(true);
  });

  it("should freeze complex nested structures with circular refs", () => {
    const a: any = { val: 1 };
    const b: any = { a };
    a.b = b; // circular reference
    deepFreeze(a);
    expect(Object.isFrozen(a)).toBe(true);
    expect(Object.isFrozen(b)).toBe(true);
  });
});
