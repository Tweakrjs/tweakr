import { containsIgnoreCase } from "../../src/lang/containsIgnoreCase";

describe("containsIgnoreCase", () => {
  it("should check substring ignoring case", () => {
    expect(containsIgnoreCase("Hello", "he")).toBe(true);
    expect(containsIgnoreCase("Hello", "HE")).toBe(true);
    expect(containsIgnoreCase("Hello", "hi")).toBe(false);
  });
});
