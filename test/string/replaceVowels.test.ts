import { describe, it, expect } from "vitest";
import { replaceVowels } from "../../src/string/replaceVowels";

describe("replaceVowels", () => {
  it("replaces all vowels with specified character", () => {
    expect(replaceVowels("Hello World", "*")).toBe("H*ll* W*rld");
    expect(replaceVowels("Tweakr", "#")).toBe("Tw##kr");
    expect(replaceVowels("AEIOUaeiou", "0")).toBe("0000000000");
    expect(replaceVowels("bcdfg", "x")).toBe("bcdfg"); // no vowels
  });
});
