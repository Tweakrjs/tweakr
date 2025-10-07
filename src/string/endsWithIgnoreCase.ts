/**
 * Checks if a string ends with the given search string, ignoring case.
 *
 * @param str - The string to check.
 * @param search - The string to test at the end of `str`.
 * @returns `true` if `str` ends with `search` (case-insensitive), otherwise `false`.
 *
 * @category String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * endsWithIgnoreCase("Hello World", "world"); // true
 * endsWithIgnoreCase("Hello World", "WORLD"); // true
 * endsWithIgnoreCase("Hello", "lo");          // true
 * endsWithIgnoreCase("Hello", "LO");          // true
 * ```
 */
export function endsWithIgnoreCase(str: string, search: string): boolean {
  return str.toLowerCase().endsWith(search.toLowerCase());
}
