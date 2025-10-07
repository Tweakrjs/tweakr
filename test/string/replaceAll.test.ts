import { replaceAll } from "../../src/string/replaceAll";

describe("replaceAll", () => {
  it("should replace all occurrences of a string", () => {
    expect(replaceAll("foo bar foo", "foo", "baz")).toBe("baz bar baz");
  });

  it("should replace using regex", () => {
    expect(replaceAll("foo1 foo2 foo3", /foo\d/g, "bar")).toBe("bar bar bar");
  });

  it("should return original string if nothing matches", () => {
    expect(replaceAll("hello", "x", "y")).toBe("hello");
  });
});
