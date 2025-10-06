import { cloneDeep } from "../../src/object/cloneDeep";

describe("cloneDeep", () => {
  it("should deeply clone a simple object", () => {
    const obj = { a: 1, b: { c: 2 } };
    const copy = cloneDeep(obj);
    expect(copy).toEqual(obj);
    expect(copy).not.toBe(obj);
    expect(copy.b).not.toBe(obj.b);
  });

  it("should clone arrays correctly", () => {
    const arr = [1, [2, 3], { a: 4 }];
    const copy = cloneDeep(arr);
    expect(copy).toEqual(arr);
    expect(copy).not.toBe(arr);
    expect(copy[1]).not.toBe(arr[1]);
    expect(copy[2]).not.toBe(arr[2]);
  });

  it("should return primitives as is", () => {
    expect(cloneDeep(5)).toBe(5);
    expect(cloneDeep("test")).toBe("test");
    expect(cloneDeep(null)).toBeNull();
    expect(cloneDeep(undefined)).toBeUndefined();
  });

  it("should handle circular references", () => {
    const obj: any = { a: 1 };
    obj.self = obj;
    const copy = cloneDeep(obj);
    expect(copy).not.toBe(obj);
    expect(copy.self).toBe(copy); // circular reference preserved
  });

  it("should handle Date, RegExp, and Map objects correctly", () => {
    const obj = {
      date: new Date(),
      regex: /test/i,
      map: new Map([["key", "value"]]),
    };
    const copy: any = cloneDeep(obj);
    expect(copy.date).toEqual(obj.date);
    expect(copy.date).not.toBe(obj.date);
    expect(copy.regex).toEqual(obj.regex);
    expect(copy.regex).not.toBe(obj.regex);
    expect(copy.map).toEqual(obj.map);
    expect(copy.map).not.toBe(obj.map);
  });
});
