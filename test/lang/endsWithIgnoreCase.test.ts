import { endsWithIgnoreCase } from "../../src/lang/endsWithIgnoreCase";

describe("endsWithIgnoreCase", () => {
  it("should check string end ignoring case", () => {
    expect(endsWithIgnoreCase("Hello", "LO")).toBe(true);
    expect(endsWithIgnoreCase("Hello", "lo")).toBe(true);
    expect(endsWithIgnoreCase("Hello", "he")).toBe(false);
  });
});
