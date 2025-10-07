import { describe, it, expect } from "vitest";
import { compactBy } from "../../src/array/compactBy";

describe("compactBy", () => {
  it("removes elements with falsy iteratee", () => {
    expect(compactBy([{ x: 1 }, { x: 0 }, { x: 2 }], (o) => o.x)).toEqual([
      { x: 1 },
      { x: 2 },
    ]);
  });
});
