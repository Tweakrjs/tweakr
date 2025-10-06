import { padLeft } from "../../src/lang/padLeft";

describe("padLeft", () => {
  it("should pad string on the left", () => {
    expect(padLeft("5", 3, "0")).toBe("005");
    expect(padLeft("abc", 2)).toBe("abc");
  });
});
