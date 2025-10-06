import { filterKeys } from "../../src/object/filterKeys";

describe("filterKeys", () => {
  it("should filter keys based on predicate", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const filtered = filterKeys(obj, (key) => key !== "b");
    expect(filtered).toEqual({ a: 1, c: 3 });
  });
});
