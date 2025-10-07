/**
 * Checks if a string contains a given substring.
 *
 * @param str - The string to search within.
 * @param search - The substring to search for.
 * @returns `true` if `search` is found within `str`, otherwise `false`.
 *
 * @group String
 * @since 1.1.0
 *
 * @example
 * ```ts
 * includes("Hello World", "World"); // true
 * includes("Hello World", "world"); // false
 * ```
 */
export function includes(str: string, search: string): boolean {
  return str.indexOf(search) !== -1;
}
