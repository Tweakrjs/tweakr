import { describe, it, expect } from "vitest";
import { zip } from "../../src/array/zip";

describe("zip", () => {
  it("zips arrays into grouped arrays", () => {
    expect(zip([1, 2], ["a", "b"])).toEqual([
      [1, "a"],
      [2, "b"],
    ]);
  });
});
