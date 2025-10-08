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

  it("should handle Unicode and accented characters", () => {
    expect(replaceAll("héllo héllo", "é", "e")).toBe("hello hello");
    expect(replaceAll("ñandú ñandú", /ñ/g, "n")).toBe("nandú nandú");
  });

  it("should handle HTML entities", () => {
    expect(replaceAll("Tom &amp; Jerry &amp; Spike", "&amp;", "&")).toBe(
      "Tom & Jerry & Spike"
    );
  });

  it("should ignore empty string search", () => {
    expect(replaceAll("abc", "", "-")).toBe("abc");
  });

  it("should respect regex flags", () => {
    expect(replaceAll("foo Foo foo", /foo/i, "bar")).toBe("bar Bar bar");
  });

  it("should handle special regex characters in string search", () => {
    expect(replaceAll("a.b.c", ".", "-")).toBe("a-b-c");
  });
});
