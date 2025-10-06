import { intersection } from "../../src/array/intersection";

describe("intersection", () => {
  it("returns shared elements", () => {
    expect(intersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });
});
