/**
 * Checks if a string starts with the given prefix.
 *
 * @param str - The string to check.
 * @param prefix - The prefix to match at the start of the string.
 * @returns `true` if the string starts with the prefix, otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * startsWith("hello world", "hello"); // true
 * startsWith("hello world", "world"); // false
 * startsWith("typescript", "ts"); // true
 * ```
 */
export function startsWith(str: string, prefix: string): boolean {
  return str.slice(0, prefix.length) === prefix;
}
