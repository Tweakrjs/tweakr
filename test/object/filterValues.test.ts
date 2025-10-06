import { filterValues } from "../../src/object/filterValues";

describe("filterValues", () => {
  it("should filter object values based on predicate", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const result = filterValues(obj, (value) => value > 1);
    expect(result).toEqual({ b: 2, c: 3 });
  });

  it("should return empty object if no values match", () => {
    const obj = { a: 1, b: 2 };
    const result = filterValues(obj, (value) => value > 10);
    expect(result).toEqual({});
  });
});
