import { describe, it, expect } from "vitest";
import { removeNumbers } from "../../src/string/removeNumbers";

describe("removeNumbers", () => {
  it("removes all digits from a string", () => {
    expect(removeNumbers("abc123")).toBe("abc");
    expect(removeNumbers("2025 is the year")).toBe(" is the year");
    expect(removeNumbers("no numbers")).toBe("no numbers");
    expect(removeNumbers("123456")).toBe("");
  });
});
