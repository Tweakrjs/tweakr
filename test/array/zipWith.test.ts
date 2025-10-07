import { describe, it, expect } from "vitest";
import { zipWith } from "../../src/array/zipWith";

describe("zipWith", () => {
  it("zips arrays with custom function", () => {
    expect(
      zipWith(
        [
          [1, 2],
          [3, 4],
        ],
        (...args) => args.reduce((a, b) => a + b, 0)
      )
    ).toEqual([4, 6]);
  });
});
