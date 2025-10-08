import { describe, it, expect } from "vitest";
import { mapKeysDeep } from "../../src/object/mapKeysDeep";

describe("mapKeysDeep", () => {
  it("maps keys recursively", () => {
    const obj = { a: 1, nested: { b: 2 } };
    const result = mapKeysDeep(obj, (key) => key.toUpperCase());
    expect(result).toEqual({ A: 1, NESTED: { B: 2 } });
  });

  it("handles arrays inside objects", () => {
    const obj = { arr: [{ x: 1 }] };
    const result = mapKeysDeep(obj, (key) => key + "_");
    expect(result).toEqual({ arr_: [{ x_: 1 }] });
  });
});
