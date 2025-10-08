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
export function includes(
  str: string,
  search: string,
  options?: { caseInsensitive?: boolean }
): boolean {
  // Keep original behavior: empty search returns true
  if (search === "") return true;

  // Normalize strings for Unicode
  const normalizedStr = str.normalize();
  const normalizedSearch = search.normalize();

  if (options?.caseInsensitive) {
    return (
      normalizedStr.toLowerCase().indexOf(normalizedSearch.toLowerCase()) !== -1
    );
  }

  return normalizedStr.indexOf(normalizedSearch) !== -1;
}
