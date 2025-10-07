/**
 * Deletes a cookie by setting its expiration date to a past date.
 *
 * @example
 * ```ts
 * deleteCookie("sessionId");
 * ```
 *
 * @param name - The name of the cookie to delete.
 * @param path - Optional path of the cookie. Defaults to `'/'`.
 *
 * @category Browser
 * @since 1.1.0
 */
export function deleteCookie(name: string, path = "/"): void {
  if (!name) return;
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${path}`;
}
