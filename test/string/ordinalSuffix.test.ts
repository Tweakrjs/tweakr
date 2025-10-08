import { describe, it, expect } from "vitest";
import { ordinalSuffix } from "../../src/string/ordinalSuffix";

describe("ordinalSuffix", () => {
  it("returns correct suffix for 1–3", () => {
    expect(ordinalSuffix(1)).toBe("1st");
    expect(ordinalSuffix(2)).toBe("2nd");
    expect(ordinalSuffix(3)).toBe("3rd");
  });

  it("returns 'th' for 4–10", () => {
    for (let i = 4; i <= 10; i++) {
      expect(ordinalSuffix(i)).toBe(`${i}th`);
    }
  });

  it("handles 11–13 as special case", () => {
    expect(ordinalSuffix(11)).toBe("11th");
    expect(ordinalSuffix(12)).toBe("12th");
    expect(ordinalSuffix(13)).toBe("13th");
  });

  it("handles numbers ending with 1–3 outside 11–13", () => {
    expect(ordinalSuffix(21)).toBe("21st");
    expect(ordinalSuffix(32)).toBe("32nd");
    expect(ordinalSuffix(43)).toBe("43rd");
  });

  it("handles negative numbers", () => {
    expect(ordinalSuffix(-1)).toBe("-1st");
    expect(ordinalSuffix(-12)).toBe("-12th");
  });

  it("handles zero", () => {
    expect(ordinalSuffix(0)).toBe("0th");
  });

  it("handles large numbers", () => {
    expect(ordinalSuffix(1123)).toBe("1123rd");
    expect(ordinalSuffix(1011)).toBe("1011th");
  });
});
