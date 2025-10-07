/**
 * Removes a query parameter from the current URL without reloading the page.
 *
 * @example
 * // URL: https://example.com?page=2&sort=asc
 * removeQueryParam("sort");
 * // URL becomes: https://example.com?page=2
 * ```
 *
 * @param key - The name of the query parameter to remove.
 *
 * @category Browser
 * @since 1.1.0
 */
export function removeQueryParam(key: string): void {
  const url = new URL(window.location.href);
  url.searchParams.delete(key);
  window.history.replaceState({}, "", url.toString());
}
