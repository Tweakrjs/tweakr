import { round } from "../../src/number/round";

describe("round", () => {
  it("should round to specified decimals", () => {
    expect(round(1.2345, 2)).toBe(1.23);
    expect(round(1.2355, 2)).toBe(1.24);
    expect(round(1.2)).toBe(1);
  });
});
