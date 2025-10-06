import { reverseString } from "../../src/string/reverseString";

describe("reverseString", () => {
  it("should reverse characters", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("")).toBe("");
  });
});
