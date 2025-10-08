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

  it("handles Unicode / accented characters", () => {
    expect(removeSuffix("caféWorld", "World")).toBe("café");
    expect(removeSuffix("naïveTest", "Test")).toBe("naïve");
  });

  it("handles case-insensitive removal", () => {
    expect(removeSuffix("HelloWorld", "WORLD", { caseInsensitive: true })).toBe(
      "Hello"
    );
    expect(removeSuffix("Foobar", "BAR", { caseInsensitive: true })).toBe(
      "Foo"
    );
  });

  it("handles HTML entities", () => {
    expect(removeSuffix("Test&amp;", "&amp;")).toBe("Test");
  });
});
