/**
 * Checks if a string ends with the given suffix.
 *
 * @param str - The string to check.
 * @param suffix - The suffix to test.
 * @returns `true` if `str` ends with `suffix`, otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * endsWith("Hello World", "World"); // true
 * endsWith("Hello World", "world"); // false
 * endsWith("Hello", "");           // true
 * ```
 */
export function endsWith(str: string, suffix: string): boolean {
  if (suffix === "") return true;
  return str.slice(-suffix.length) === suffix;
}
