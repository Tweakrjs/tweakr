import { describe, it, expect } from "vitest";
import { dropWhile } from "../../src/array/dropWhile";

describe("dropWhile", () => {
  it("drops elements while predicate is true", () => {
    expect(dropWhile([1, 2, 3, 4], (n) => n < 3)).toEqual([3, 4]);
  });
});
