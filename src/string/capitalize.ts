/**
 * Capitalizes the first character of a string.
 *
 * If the string is empty, it returns an empty string.
 *
 * @param str - The input string.
 * @returns The input string with the first character converted to uppercase.
 *
 * @group String
 * @since 1.1.0
 * @example
 * ```ts
 * capitalize('hello'); // 'Hello'
 * capitalize('world'); // 'World'
 * capitalize(''); // ''
 * ```
 */
export function capitalize(str: string): string {
  if (!str) return "";
  return str[0].toUpperCase() + str.slice(1);
}
