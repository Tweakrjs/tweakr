import { slice } from "../../src/array/slice";

describe("slice", () => {
  it("slices array between indices", () => {
    expect(slice([1, 2, 3, 4], 1, 3)).toEqual([2, 3]);
  });
});
