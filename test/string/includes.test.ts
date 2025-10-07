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
});
