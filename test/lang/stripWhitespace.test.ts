import { stripWhitespace } from "../../src/lang/stripWhitespace";

describe("stripWhitespace", () => {
  it("should remove all whitespace", () => {
    expect(stripWhitespace(" a b c ")).toBe("abc");
    expect(stripWhitespace("")).toBe("");
  });
});
