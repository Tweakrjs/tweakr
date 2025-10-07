import { describe, it, expect } from "vitest";
import { mapValuesDeep } from "../../src/object/mapValuesDeep";

describe("mapValuesDeep", () => {
  it("maps values recursively", () => {
    const obj = { a: 1, nested: { b: 2 } };
    const result = mapValuesDeep(obj, (val) =>
      typeof val === "number" ? val * 2 : val
    );
    expect(result).toEqual({ a: 2, nested: { b: 4 } });
  });

  it("maps only values and keeps keys intact", () => {
    const obj = { x: 1, y: { z: 3 } };
    const result = mapValuesDeep(obj, (val) => val + 1);
    expect(result).toEqual({ x: 2, y: { z: 4 } });
  });
});
