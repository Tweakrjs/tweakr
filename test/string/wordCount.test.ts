import { wordCount } from "../../src/string/wordCount";

describe("wordCount", () => {
  it("should count number of words", () => {
    expect(wordCount("Hello world")).toBe(2);
    expect(wordCount("   multiple   spaces  ")).toBe(2);
    expect(wordCount("")).toBe(0);
  });
});
