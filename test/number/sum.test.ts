import { sum } from "../../src/number/sum";

describe("sum", () => {
  it("should sum numbers in array", () => {
    expect(sum([1, 2, 3])).toBe(6);
    expect(sum([])).toBe(0);
  });
});
