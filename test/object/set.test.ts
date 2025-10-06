import { set } from "../../src/object/set";

describe("set", () => {
  it("should set nested value", () => {
    const obj: any = {};
    set(obj, "a.b.c", 5);
    expect(obj).toEqual({ a: { b: { c: 5 } } });
  });

  it("should overwrite existing value", () => {
    const obj: any = { a: { b: { c: 1 } } };
    set(obj, "a.b.c", 10);
    expect(obj.a.b.c).toBe(10);
  });
});
