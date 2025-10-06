import { camelCase } from "../../src/lang/camelCase";

describe("camelCase", () => {
  it("should convert string to camelCase", () => {
    expect(camelCase("hello world")).toBe("helloWorld");
    expect(camelCase("Hello_world")).toBe("helloWorld");
  });
});
