import { titleCase } from "../../src/string/titleCase";

describe("titleCase", () => {
  it("should capitalize first letter of each word", () => {
    expect(titleCase("hello world")).toBe("Hello World");
    expect(titleCase("JAVA script")).toBe("Java Script");
  });
});
