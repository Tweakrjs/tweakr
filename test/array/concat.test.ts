import { concat } from "../../src/array/concat";

describe("concat", () => {
  it("concatenates multiple arrays", () => {
    expect(concat([1], [2, 3], 4)).toEqual([1, 2, 3, 4]);
  });
});
