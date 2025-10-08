import { describe, it, expect } from "vitest";
import { unionBy } from "../../src/array/unionBy";

describe("unionBy", () => {
  it("combines arrays with iteratee uniqueness", () => {
    expect(unionBy([[{ x: 1 }], [{ x: 2 }]], (o) => o.x)).toEqual([
      { x: 1 },
      { x: 2 },
    ]);
  });
});
