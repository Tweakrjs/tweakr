import { flatten } from "../../src/array/flatten";

describe("flatten", () => {
  it("flattens one level deep", () => {
    expect(flatten([1, [2, 3], [4]])).toEqual([1, 2, 3, 4]);
  });
});
