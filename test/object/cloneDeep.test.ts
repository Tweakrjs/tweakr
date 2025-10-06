import { cloneDeep } from "../../src/object/cloneDeep";

describe("cloneDeep", () => {
  it("should deeply clone an object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const copy = cloneDeep(obj);
    expect(copy).toEqual(obj);
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  it("should return primitive as is", () => {
    expect(cloneDeep(5)).toBe(5);
  });
});
