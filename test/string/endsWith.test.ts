import { describe, it, expect } from "vitest";
import { endsWith } from "../../src/string/endsWith";

describe("endsWith", () => {
  it("matches normal ASCII suffixes", () => {
    expect(endsWith("Hello World", "World")).toBe(true);
    expect(endsWith("Hello World", "hello")).toBe(false);
    expect(endsWith("typescript", "ts")).toBe(false);
    expect(endsWith("typescript", "pt")).toBe(true);
  });

  it("handles empty strings and suffixes", () => {
    expect(endsWith("", "")).toBe(true);
    expect(endsWith("abc", "")).toBe(true);
    expect(endsWith("", "a")).toBe(false);
  });

  it("handles accented and composed characters", () => {
    expect(endsWith("café", "fé")).toBe(true);
    expect(endsWith("cafe\u0301", "fé")).toBe(true); // NFD composed character
    expect(endsWith("niño", "ño")).toBe(true);
  });

  it("handles Unicode spaces and zero-width characters at the end", () => {
    expect(endsWith("Hello\u00A0", "\u00A0")).toBe(true); // non-breaking space
    expect(endsWith("foo\u200B", "\u200B")).toBe(true); // zero-width space
    expect(endsWith("bar\u205F\u3000", "\u205F\u3000")).toBe(true); // narrow & ideographic
  });

  it("decodes HTML entities for matching", () => {
    expect(endsWith("Hello&nbsp;", "\u00A0")).toBe(true);
    expect(endsWith("Foo&emsp;", "\u2003")).toBe(true);
    expect(endsWith("Bar&thinsp;", "\u2009")).toBe(true);
  });

  it("returns false if suffix is longer than string", () => {
    expect(endsWith("hi", "hello")).toBe(false);
  });

  it("preserves visible characters including symbols", () => {
    expect(endsWith("symbols★☆", "★☆")).toBe(true);
    expect(endsWith("symbols★☆", "☆")).toBe(true); // corrected, last character is ☆
  });
});
