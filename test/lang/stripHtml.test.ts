import { stripHtml } from "../../src/lang/stripHtml";

describe("stripHtml", () => {
  it("should remove HTML tags", () => {
    expect(stripHtml("<div>Hello</div>")).toBe("Hello");
    expect(stripHtml("plain text")).toBe("plain text");
  });
});
