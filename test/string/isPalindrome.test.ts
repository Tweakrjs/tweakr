import { isPalindrome } from "../../src/string/isPalindrome";

describe("isPalindrome", () => {
  it("should detect palindromes ignoring case and non-alphanumeric", () => {
    expect(isPalindrome("Racecar")).toBe(true);
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});
