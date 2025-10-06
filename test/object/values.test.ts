import { values } from "../../src/object/values";

describe("values", () => {
  it("should return object values", () => {
    const obj = { a: 1, b: 2 };
    expect(values(obj)).toEqual([1, 2]);
  });
});
