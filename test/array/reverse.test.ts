import { reverse } from "../../src/array/reverse";

describe("reverse", () => {
  it("reverses array without mutating original", () => {
    const arr = [1, 2, 3];
    expect(reverse(arr)).toEqual([3, 2, 1]);
    expect(arr).toEqual([1, 2, 3]);
  });
});
