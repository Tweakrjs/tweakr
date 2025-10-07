import { trimAll } from "../../src/string/trimAll";

describe("trimAll", () => {
  it("removes all spaces, tabs, and newlines", () => {
    expect(trimAll(" a b c ")).toBe("abc");
    expect(trimAll("a\tb\nc")).toBe("abc");
  });

  it("returns empty string if input is empty", () => {
    expect(trimAll("")).toBe("");
  });

  it("returns string unchanged if no whitespace", () => {
    expect(trimAll("abc")).toBe("abc");
  });
});
