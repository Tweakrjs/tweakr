/**
 * Counts the number of words in a string.
 * Words are sequences of non-whitespace characters separated by spaces.
 *
 * @param str - The input string to count words from.
 * @returns The number of words in the string.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * wordCount("Hello world!"); // 2
 * wordCount("   This is a test.  "); // 4
 * wordCount(""); // 0
 * ```
 */
export function wordCount(str: string): number {
  const match = str.trim().match(/\S+/g);
  return match ? match.length : 0;
}
