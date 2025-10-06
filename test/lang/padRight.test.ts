import { padRight } from "../../src/lang/padRight";

describe("padRight", () => {
  it("should pad string on the right", () => {
    expect(padRight("5", 3, "0")).toBe("500");
    expect(padRight("abc", 2)).toBe("abc");
  });
});
