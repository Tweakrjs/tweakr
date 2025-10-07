import { ordinalSuffix } from "../../src/string/ordinalSuffix";

describe("ordinalSuffix", () => {
  it("returns correct suffix for 1-3", () => {
    expect(ordinalSuffix(1)).toBe("1st");
    expect(ordinalSuffix(2)).toBe("2nd");
    expect(ordinalSuffix(3)).toBe("3rd");
  });

  it('returns "th" for 4-10', () => {
    for (let i = 4; i <= 10; i++) {
      expect(ordinalSuffix(i)).toBe(`${i}th`);
    }
  });

  it("handles teen exceptions correctly", () => {
    expect(ordinalSuffix(11)).toBe("11th");
    expect(ordinalSuffix(12)).toBe("12th");
    expect(ordinalSuffix(13)).toBe("13th");
  });

  it("handles higher numbers correctly", () => {
    expect(ordinalSuffix(21)).toBe("21st");
    expect(ordinalSuffix(22)).toBe("22nd");
    expect(ordinalSuffix(23)).toBe("23rd");
    expect(ordinalSuffix(101)).toBe("101st");
    expect(ordinalSuffix(112)).toBe("112th");
  });

  it("handles zero and negative numbers", () => {
    expect(ordinalSuffix(0)).toBe("0th");
    expect(ordinalSuffix(-1)).toBe("-1st");
    expect(ordinalSuffix(-12)).toBe("-12th");
  });
});
