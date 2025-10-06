import { flatten } from "../../src/util/flatten";

describe("flatten", () => {
  it("should flatten nested arrays", () => {
    expect(flatten([1, [2, [3, 4]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("should return empty array for empty input", () => {
    expect(flatten([])).toEqual([]);
  });
});
