import { filterKeys } from "../../src/object/filterKeys";

describe("filterKeys", () => {
  it("should filter object keys based on predicate", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = filterKeys(obj, (key) => key !== "b");
    expect(result).toEqual({ a: 1, c: 3 });
  });

  it("should return empty object if no keys match", () => {
    const obj = { a: 1, b: 2 };
    const result = filterKeys(obj, () => false);
    expect(result).toEqual({});
  });
});
