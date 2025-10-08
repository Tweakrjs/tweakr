import { describe, it, expect } from "vitest";
import { trimAll } from "../../src/string/trimAll";

describe("trimAll", () => {
  it("removes normal spaces, tabs, and newlines", () => {
    expect(trimAll("  hello   world  ")).toBe("helloworld");
    expect(trimAll("\thello\tworld\n")).toBe("helloworld");
    expect(trimAll(" a b c ")).toBe("abc");
  });

  it("removes non-breaking and other Unicode spaces", () => {
    expect(trimAll("hello\u00A0world")).toBe("helloworld"); // non-breaking
    expect(trimAll("foo\u200Bbar")).toBe("foobar"); // zero-width
    expect(trimAll("\u202Ffoo\u205Fbar\u3000")).toBe("foobar"); // narrow & ideographic
  });

  it("removes multiple mixed whitespace characters", () => {
    const input = " \t\u00A0\u200B\nHello \u202FWorld\u3000 ";
    expect(trimAll(input)).toBe("HelloWorld");
  });

  it("handles accented characters without removing them", () => {
    expect(trimAll(" á b ç ")).toBe("ábç");
    expect(trimAll("ñ \u00A0 ñ")).toBe("ññ");
  });

  it("does not remove visible characters resembling spaces", () => {
    expect(trimAll("·•★☆")).toBe("·•★☆"); // these are symbols, not whitespace
  });

  it("handles empty string and strings without whitespace", () => {
    expect(trimAll("")).toBe("");
    expect(trimAll("hello")).toBe("hello");
  });

  it("handles HTML entity decoded spaces correctly", () => {
    const nbsp = "\u00A0"; // &nbsp; decoded
    expect(trimAll(`foo${nbsp}bar`)).toBe("foobar");
  });
});
