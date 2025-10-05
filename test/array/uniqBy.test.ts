import { describe, it, expect } from "vitest";
import { uniqBy } from "../../src/array/uniqBy";

describe("uniqBy", () => {
  it("removes duplicates based on iteratee", () => {
    const arr = [{ id: 1 }, { id: 2 }, { id: 1 }];
    expect(uniqBy(arr, (x) => x.id)).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
