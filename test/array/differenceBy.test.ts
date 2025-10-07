import { describe, it, expect } from "vitest";
import { differenceBy } from "../../src/array/differenceBy";

describe("differenceBy", () => {
  it("returns difference using iteratee", () => {
    expect(differenceBy([{ x: 1 }, { x: 2 }], [{ x: 2 }], (o) => o.x)).toEqual([
      { x: 1 },
    ]);
  });
});
