/**
 * Checks whether a given string is a palindrome.
 *
 * Non-alphanumeric characters are ignored, and the check is case-insensitive.
 *
 * @param str - The string to check.
 * @returns `true` if the string is a palindrome, `false` otherwise.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * isPalindrome("racecar"); // true
 * isPalindrome("A man, a plan, a canal: Panama"); // true
 * isPalindrome("hello"); // false
 * ```
 */
export function isPalindrome(str: string): boolean {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
