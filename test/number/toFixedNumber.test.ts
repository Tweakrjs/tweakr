import { toFixedNumber } from "../../src/number/toFixedNumber";

describe("toFixedNumber", () => {
  it("should round and return number", () => {
    expect(toFixedNumber(1.2345, 2)).toBe(1.23);
    expect(toFixedNumber(1.236, 2)).toBe(1.24);
    expect(toFixedNumber(1.2)).toBe(1.2);
  });
});
