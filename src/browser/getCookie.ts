/**
 * Retrieves the value of a cookie by name.
 *
 * @example
 * ```ts
 * document.cookie = "sessionId=abc123";
 * const value = getCookie("sessionId");
 * console.log(value); // "abc123"
 * ```
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The cookie value as a string, or `null` if not found.
 *
 * @group Browser
 * @since 1.1.0
 */
export function getCookie(name: string): string | null {
  if (!name) return null;
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  for (const cookie of cookies) {
    const [key, ...rest] = cookie.split("=");
    if (key === name) {
      return decodeURIComponent(rest.join("="));
    }
  }
  return null;
}
