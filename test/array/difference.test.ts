import { describe, it, expect } from "vitest";
import { difference } from "../../src/array/difference";

describe("difference", () => {
  it("returns elements not in second array", () => {
    expect(difference([1, 2, 3], [2, 4])).toEqual([1, 3]);
  });
});
