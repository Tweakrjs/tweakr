import { collapseWhitespace } from "../../src/string/collapseWhitespace";

describe("collapseWhitespace", () => {
  it("replaces multiple spaces with single space", () => {
    expect(collapseWhitespace("a    b  c")).toBe("a b c");
  });

  it("replaces newlines and tabs with single space", () => {
    expect(collapseWhitespace("a\nb\tc")).toBe("a b c");
  });

  it("trims leading and trailing spaces", () => {
    expect(collapseWhitespace("  a b c  ")).toBe("a b c");
  });

  it("returns empty string if input is empty", () => {
    expect(collapseWhitespace("")).toBe("");
  });
});
