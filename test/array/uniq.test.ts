import { uniq } from "../../src/array/uniq";

describe("uniq", () => {
  it("removes duplicate primitive values", () => {
    expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });

  it("removes duplicate objects/arrays (shallow equality)", () => {
    const obj1 = { a: 1 };
    const obj2 = { a: 1 };
    const arr = [obj1, obj2, obj1];
    expect(uniq(arr)).toEqual([obj1, obj2]);
  });
});
