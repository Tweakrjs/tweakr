import { describe, it, expect } from "vitest";
import { dropRight } from "../../src/array/dropRight";

describe("dropRight", () => {
  it("drops n elements from end", () => {
    expect(dropRight([1, 2, 3, 4], 2)).toEqual([1, 2]);
  });
});
