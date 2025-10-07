import { endsWith } from "../../src/string/endsWith";

describe("endsWith", () => {
  it("should return true if string ends with suffix", () => {
    expect(endsWith("hello world", "world")).toBe(true);
  });

  it("should return false if string does not end with suffix", () => {
    expect(endsWith("hello world", "hello")).toBe(false);
  });

  it("should handle empty suffix", () => {
    expect(endsWith("hello", "")).toBe(true);
  });
});
