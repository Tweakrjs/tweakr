/**
 * Checks if a string starts with the given search string, ignoring case.
 *
 * @param str - The string to check.
 * @param search - The search string to match at the start of the string.
 * @returns `true` if the string starts with the search string (case-insensitive), otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * startsWithIgnoreCase("Hello World", "hello"); // true
 * startsWithIgnoreCase("TypeScript", "TS"); // true
 * startsWithIgnoreCase("JavaScript", "script"); // false
 * ```
 */
export function startsWithIgnoreCase(str: string, search: string): boolean {
  return str.toLowerCase().startsWith(search.toLowerCase());
}
