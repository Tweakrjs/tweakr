/**
 * Retrieves the value of a query parameter from the current URL.
 *
 * @example
 * // URL: https://example.com?page=2
 * const page = getQueryParam("page");
 * console.log(page); // "2"
 * ```
 *
 * @param key - The name of the query parameter to retrieve.
 * @returns The value of the parameter as a string, or `null` if not present.
 *
 * @group Browser
 * @since 1.1.0
 */
export function getQueryParam(key: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}
