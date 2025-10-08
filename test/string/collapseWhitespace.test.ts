import { describe, it, expect } from "vitest";
import { collapseWhitespace } from "../../src/string/collapseWhitespace";

describe("collapseWhitespace", () => {
  it("collapses normal spaces, tabs, and newlines", () => {
    expect(collapseWhitespace("  Hello   World  ")).toBe("Hello World");
    expect(collapseWhitespace("\tHello\tWorld\n")).toBe("Hello World");
    expect(collapseWhitespace(" a b c ")).toBe("a b c");
  });

  it("collapses non-breaking and other Unicode spaces", () => {
    expect(collapseWhitespace("Hello\u00A0World")).toBe("Hello World"); // non-breaking
    expect(collapseWhitespace("foo\u200Bbar")).toBe("foo bar"); // zero-width
    expect(collapseWhitespace("\u202Ffoo\u205Fbar\u3000")).toBe("foo bar"); // narrow & ideographic
  });

  it("handles mixed whitespace characters", () => {
    const input = " \t\u00A0\u200B\nHello \u202FWorld\u3000 ";
    expect(collapseWhitespace(input)).toBe("Hello World");
  });

  it("preserves accented characters and symbols", () => {
    expect(collapseWhitespace(" á  b  ç ")).toBe("á b ç");
    expect(collapseWhitespace("ñ\u00A0ñ")).toBe("ñ ñ");
    expect(collapseWhitespace("·•★☆")).toBe("·•★☆"); // symbols are preserved
  });

  it("handles empty strings and strings without whitespace", () => {
    expect(collapseWhitespace("")).toBe("");
    expect(collapseWhitespace("Hello")).toBe("Hello");
  });

  it("collapses HTML entity decoded spaces correctly", () => {
    expect(collapseWhitespace("foo&nbsp;&nbsp;bar")).toBe("foo bar");
    expect(collapseWhitespace("foo&emsp;bar&ensp;baz")).toBe("foo bar baz");
  });
});
