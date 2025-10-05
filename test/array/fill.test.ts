import { describe, it, expect } from "vitest";
import { fill } from "../../src/array/fill";

describe("fill", () => {
  it("fills array section with value", () => {
    expect(fill([1, 2, 3], 0, 1, 3)).toEqual([1, 0, 0]);
  });
});
