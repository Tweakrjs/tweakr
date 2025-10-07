/**
 * Removes all whitespace characters from a string.
 *
 * @param str - The input string.
 * @returns The string with all whitespace removed.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * trimAll("  hello   world  "); // "helloworld"
 * trimAll(" a b c "); // "abc"
 * ```
 */
export function trimAll(str: string): string {
  return str.replace(/\s+/g, "");
}
