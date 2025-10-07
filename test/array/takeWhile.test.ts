import { describe, it, expect } from "vitest";
import { takeWhile } from "../../src/array/takeWhile";

describe("takeWhile", () => {
  it("takes elements while predicate is true", () => {
    expect(takeWhile([1, 2, 3, 4], (n) => n < 3)).toEqual([1, 2]);
  });
});
