import { slugify } from "../../src/string/slugify";

describe("slugify", () => {
  it("should convert string to URL-friendly slug", () => {
    expect(slugify("Hello World!")).toBe("hello-world");
    expect(slugify("  Multiple   Spaces  ")).toBe("multiple-spaces");
  });
});
