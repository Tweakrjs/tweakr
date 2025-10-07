import { describe, it, expect } from "vitest";
import { chunkWhile } from "../../src/array/chunkWhile";

describe("chunkWhile", () => {
  it("splits array while predicate is true", () => {
    expect(chunkWhile([1, 2, 3, 4], (n) => n < 3)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });
});
