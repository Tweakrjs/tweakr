import { mapValues } from "../../src/object/mapValues";

describe("mapValues", () => {
  it("should transform object values", () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value) => value * 2);
    expect(result).toEqual({ a: 2, b: 4 });
  });

  it("should provide key to callback", () => {
    const obj = { a: 1, b: 2 };
    const result = mapValues(obj, (value, key) => `${key}-${value}`);
    expect(result).toEqual({ a: "a-1", b: "b-2" });
  });
});
