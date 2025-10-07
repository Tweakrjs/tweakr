import { describe, it, expect } from "vitest";
import { unzip } from "../../src/array/unzip";

describe("unzip", () => {
  it("transposes arrays", () => {
    expect(
      unzip([
        [1, "a"],
        [2, "b"],
      ])
    ).toEqual([
      [1, 2],
      ["a", "b"],
    ]);
  });

  it("returns empty array for empty input", () => {
    expect(unzip([])).toEqual([]);
  });
});
