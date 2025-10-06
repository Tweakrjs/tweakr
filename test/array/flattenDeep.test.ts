import { flattenDeep } from "../../src/array/flattenDeep";

describe("flattenDeep", () => {
  it("recursively flattens nested arrays (full flatten)", () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
  });

  it("flattens to a specific depth", () => {
    expect(flattenDeep([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]]);
  });

  it("handles empty arrays", () => {
    expect(flattenDeep([1, [], [2, []]])).toEqual([1, 2]);
  });
});
