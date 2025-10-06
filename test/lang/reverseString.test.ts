import { reverseString } from "../../src/lang/reverseString";

describe("reverseString", () => {
  it("should reverse characters", () => {
    expect(reverseString("abc")).toBe("cba");
    expect(reverseString("")).toBe("");
  });
});
