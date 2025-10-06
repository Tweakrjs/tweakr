import { deepFreeze } from "../../src/util/deepFreeze";

describe("deepFreeze", () => {
  it("should freeze nested objects and arrays", () => {
    const obj = { a: { b: [1, 2] } };
    deepFreeze(obj);
    expect(Object.isFrozen(obj)).toBe(true);
    expect(Object.isFrozen(obj.a)).toBe(true);
    expect(Object.isFrozen(obj.a.b)).toBe(true);
  });

  it("should handle circular references", () => {
    const obj: any = {};
    obj.self = obj;
    expect(() => deepFreeze(obj)).not.toThrow();
    expect(Object.isFrozen(obj)).toBe(true);
  });
});
