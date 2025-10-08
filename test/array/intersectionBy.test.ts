import { describe, it, expect } from "vitest";
import { intersectionBy } from "../../src/array/intersectionBy";

describe("intersectionBy", () => {
  it("returns intersection using iteratee", () => {
    expect(
      intersectionBy([[{ x: 1 }, { x: 2 }], [{ x: 2 }]], (o) => o.x)
    ).toEqual([{ x: 2 }]);
  });
});
