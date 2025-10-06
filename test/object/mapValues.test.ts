import { mapValues } from "../../src/object/mapValues";

describe("mapValues", () => {
  it("should map object values", () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });
});
