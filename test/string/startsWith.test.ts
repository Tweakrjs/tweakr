import { startsWith } from "../../src/string/startsWith";

describe("startsWith", () => {
  it("should return true if string starts with prefix", () => {
    expect(startsWith("hello world", "hello")).toBe(true);
  });

  it("should return false if string does not start with prefix", () => {
    expect(startsWith("hello world", "world")).toBe(false);
  });

  it("should handle empty prefix", () => {
    expect(startsWith("hello", "")).toBe(true);
  });
});
