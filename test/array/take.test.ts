import { describe, it, expect } from "vitest";
import { take } from "../../src/array/take";

describe("take", () => {
  it("returns first n elements", () => {
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
  });
});
