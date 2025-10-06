import { repeat } from "../../src/lang/repeat";

describe("repeat", () => {
  it("should repeat string N times", () => {
    expect(repeat("abc", 3)).toBe("abcabcabc");
    expect(repeat("x", 0)).toBe("");
  });
});
