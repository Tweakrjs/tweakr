// test/lang/truncate.test.ts
import { truncate } from "../../src/string/truncate";

describe("truncate", () => {
  it("should truncate string with suffix", () => {
    expect(truncate("Hello world", 5)).toBe("Hell…"); // normal case
    expect(truncate("Hi", 5)).toBe("Hi"); // no truncation needed
    expect(truncate("Hello", 1)).toBe("…"); // max <= suffix length
    expect(truncate("Hello", 0)).toBe(""); // max = 0
    expect(truncate("Hello", -5)).toBe(""); // max negative
  });

  it("should allow custom suffix", () => {
    expect(truncate("Hello world", 8, "...")).toBe("Hello...");
  });
});
