import { describe, it, expect } from "vitest";
import { flattenDeep } from "../../src/array/flattenDeep";

describe("flattenDeep", () => {
  it("recursively flattens nested arrays", () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });
});
