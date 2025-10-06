import { decimalPlaces } from "../../src/number/decimalPlaces";

describe("decimalPlaces", () => {
  it("should count decimal places correctly", () => {
    expect(decimalPlaces(1.23)).toBe(2);
    expect(decimalPlaces(100)).toBe(0);
    expect(decimalPlaces(1.234e-2)).toBe(5);
  });
});
