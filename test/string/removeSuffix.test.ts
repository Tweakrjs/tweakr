import { removeSuffix } from "../../src/string/removeSuffix";

describe("removeSuffix", () => {
  it("removes the suffix if present", () => {
    expect(removeSuffix("helloWorld", "World")).toBe("hello");
    expect(removeSuffix("foobar", "bar")).toBe("foo");
  });

  it("returns the string unchanged if suffix not present", () => {
    expect(removeSuffix("helloWorld", "hello")).toBe("helloWorld");
    expect(removeSuffix("foobar", "foo")).toBe("foobar");
  });

  it("handles empty suffix", () => {
    expect(removeSuffix("test", "")).toBe("test");
  });

  it("handles empty string", () => {
    expect(removeSuffix("", "suffix")).toBe("");
    expect(removeSuffix("", "")).toBe("");
  });
});
