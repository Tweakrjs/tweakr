import { describe, it, expect } from "vitest";
import { startsWith } from "../../src/string/startsWith";

describe("startsWith", () => {
  it("matches normal ASCII prefixes", () => {
    expect(startsWith("hello world", "hello")).toBe(true);
    expect(startsWith("hello world", "world")).toBe(false);
    expect(startsWith("typescript", "ts")).toBe(false);
    expect(startsWith("typescript", "ty")).toBe(true);
  });

  it("handles empty strings and prefixes", () => {
    expect(startsWith("", "")).toBe(true);
    expect(startsWith("abc", "")).toBe(true);
    expect(startsWith("", "a")).toBe(false);
  });

  it("handles accented and composed characters", () => {
    expect(startsWith("ábc", "á")).toBe(true);
    expect(startsWith("a\u0301bc", "á")).toBe(true); // NFD composed character
    expect(startsWith("ñandú", "ñ")).toBe(true);
  });

  it("handles Unicode spaces and zero-width characters at start", () => {
    expect(startsWith("\u00A0Hello", "\u00A0He")).toBe(true); // non-breaking space
    expect(startsWith("\u200Bfoo", "\u200Bf")).toBe(true); // zero-width space
  });

  it("decodes HTML entities for matching", () => {
    expect(startsWith("&nbsp;Hello", "\u00A0He")).toBe(true);
    expect(startsWith("&emsp;Foo", "\u2003Fo")).toBe(true);
    expect(startsWith("Bar&thinsp;", "Bar")).toBe(true);
  });

  it("returns false if prefix is longer than string", () => {
    expect(startsWith("hi", "hello")).toBe(false);
  });

  it("preserves visible characters including symbols", () => {
    expect(startsWith("★☆ symbols", "★☆")).toBe(true);
    expect(startsWith("★☆ symbols", "☆")).toBe(false);
  });
});
