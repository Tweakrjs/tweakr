import { uniq } from "../../src/array/uniq";

describe("uniq", () => {
  it("removes duplicate values", () => {
    expect(uniq([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
});
