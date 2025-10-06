import { filterValues } from "../../src/object/filterValues";

describe("filterValues", () => {
  it("should filter values based on predicate", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const filtered = filterValues(obj, (value) => value > 1);
    expect(filtered).toEqual({ b: 2, c: 3 });
  });
});
