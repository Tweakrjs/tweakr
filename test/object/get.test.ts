import { get } from "../../src/object/get";

describe("get", () => {
  const obj = { a: { b: { c: 1 } } };

  it("should get nested value", () => {
    expect(get(obj, "a.b.c")).toBe(1);
  });

  it("should return default if path does not exist", () => {
    expect(get(obj, "a.b.d", 5)).toBe(5);
  });

  it("should return undefined if path empty", () => {
    expect(get(obj, "")).toBeUndefined();
  });
});
