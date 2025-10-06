import { drop } from "../../src/array/drop";

describe("drop", () => {
  it("drops n elements from start", () => {
    expect(drop([1, 2, 3, 4], 2)).toEqual([3, 4]);
  });
});
