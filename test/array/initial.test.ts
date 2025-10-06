import { initial } from "../../src/array/initial";

describe("initial", () => {
  it("returns all but last element", () => {
    expect(initial([1, 2, 3])).toEqual([1, 2]);
  });
});
