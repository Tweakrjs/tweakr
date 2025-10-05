import { describe, it, expect } from "vitest";
import { pull } from "../../src/array/pull";

describe("pull", () => {
  it("removes given values from array", () => {
    expect(pull([1, 2, 3, 4], 2, 3)).toEqual([1, 4]);
  });
});
