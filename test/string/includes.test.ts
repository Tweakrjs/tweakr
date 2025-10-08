import { includes } from "../../src/string/includes";

describe("includes", () => {
  it("should return true if string contains search", () => {
    expect(includes("hello world", "world")).toBe(true);
  });

  it("should return false if string does not contain search", () => {
    expect(includes("hello world", "foo")).toBe(false);
  });

  it("should handle empty search", () => {
    expect(includes("hello", "")).toBe(true);
  });

  it("should handle case-insensitive search", () => {
    expect(includes("Hello World", "world", { caseInsensitive: true })).toBe(
      true
    );
    expect(includes("Hello World", "WORLD", { caseInsensitive: true })).toBe(
      true
    );
  });

  it("should handle Unicode and accented characters", () => {
    expect(includes("café", "é")).toBe(true);
    expect(includes("naïve", "ï")).toBe(true);
  });

  it("should handle normalized Unicode", () => {
    expect(includes("e\u0301", "é")).toBe(true); // NFC vs NFD
  });
});
