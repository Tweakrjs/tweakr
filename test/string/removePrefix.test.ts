import { describe, it, expect } from "vitest";
import { removePrefix } from "../../src/string/removePrefix";

describe("removePrefix", () => {
  it("removes the prefix if present", () => {
    expect(removePrefix("helloWorld", "hello")).toBe("World");
    expect(removePrefix("foobar", "foo")).toBe("bar");
  });

  it("returns the string unchanged if prefix not present", () => {
    expect(removePrefix("helloWorld", "world")).toBe("helloWorld");
    expect(removePrefix("foobar", "bar")).toBe("foobar");
  });

  it("handles empty prefix", () => {
    expect(removePrefix("test", "")).toBe("test");
  });

  it("handles empty string", () => {
    expect(removePrefix("", "prefix")).toBe("");
    expect(removePrefix("", "")).toBe("");
  });

  it("handles Unicode / accented characters", () => {
    expect(removePrefix("caféWorld", "café")).toBe("World");
    expect(removePrefix("naïveTest", "naï")).toBe("veTest");
  });

  it("handles case-insensitive removal", () => {
    expect(removePrefix("HelloWorld", "hello", { caseInsensitive: true })).toBe(
      "World"
    );
    expect(removePrefix("Foobar", "FOO", { caseInsensitive: true })).toBe(
      "bar"
    );
  });

  it("handles HTML entities", () => {
    expect(removePrefix("&amp;Test", "&amp;")).toBe("Test");
  });
});
