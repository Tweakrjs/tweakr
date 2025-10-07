import { describe, it, expect } from "vitest";
import { reverseWordsAdvanced } from "../../src/string/reverseWordsAdvanced";

describe("reverseWordsAdvanced", () => {
  it("reverses the order of words, handling extra spaces", () => {
    expect(reverseWordsAdvanced("Hello world!")).toBe("world! Hello");
    expect(reverseWordsAdvanced("  One   two  three ")).toBe("three two One");
    expect(reverseWordsAdvanced("Single")).toBe("Single");
    expect(reverseWordsAdvanced("")).toBe("");
  });
});
