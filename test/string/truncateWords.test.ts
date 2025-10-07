import { describe, it, expect } from "vitest";
import { truncateWords } from "../../src/string/truncateWords";

describe("truncateWords", () => {
  it("truncates string to specified number of words", () => {
    expect(truncateWords("The quick brown fox", 2)).toBe("The quick");
    expect(truncateWords("Hello world!", 5)).toBe("Hello world!");
    expect(truncateWords("One two three", 0)).toBe("");
    expect(truncateWords("Single", 1)).toBe("Single");
  });
});
