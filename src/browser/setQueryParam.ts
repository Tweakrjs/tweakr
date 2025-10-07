/**
 * Sets or updates a query parameter in the current URL without reloading the page.
 *
 * @example
 * // URL: https://example.com
 * setQueryParam("page", "2");
 * // URL becomes: https://example.com?page=2
 * ```
 *
 * @param key - The name of the query parameter.
 * @param value - The value to set for the query parameter.
 *
 * @category Browser
 * @since 1.1.0
 */
export function setQueryParam(key: string, value: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.replaceState({}, "", url.toString());
}
