import { startsWithIgnoreCase } from "../../src/lang/startsWithIgnoreCase";

describe("startsWithIgnoreCase", () => {
  it("should check string start ignoring case", () => {
    expect(startsWithIgnoreCase("Hello", "he")).toBe(true);
    expect(startsWithIgnoreCase("Hello", "HE")).toBe(true);
    expect(startsWithIgnoreCase("Hello", "lo")).toBe(false);
  });
});
