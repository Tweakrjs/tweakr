/**
 * Checks if a string contains a given substring, ignoring case.
 *
 * @param str - The string to search within.
 * @param search - The substring to search for.
 * @returns `true` if `search` is found in `str` (case-insensitive), otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * containsIgnoreCase("Hello World", "hello"); // true
 * containsIgnoreCase("Hello World", "WORLD"); // true
 * containsIgnoreCase("Hello World", "test");  // false
 * ```
 */
export function containsIgnoreCase(str: string, search: string): boolean {
  return str.toLowerCase().includes(search.toLowerCase());
}
