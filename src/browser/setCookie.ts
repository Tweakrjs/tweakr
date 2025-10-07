interface CookieOptions {
  days?: number; // number of days before expiration
  path?: string;
  sameSite?: "Lax" | "Strict" | "None";
  secure?: boolean;
}
/**
 * Sets a cookie with optional expiration, path, SameSite, and secure attributes.
 *
 * @example
 * ```ts
 * // Set a cookie that expires in 7 days
 * setCookie("sessionId", "abc123");
 *
 * // Set a secure cookie for the "/app" path
 * setCookie("authToken", "xyz789", { days: 14, path: "/app", secure: true });
 * ```
 *
 * @param name - The name of the cookie.
 * @param value - The value to store in the cookie.
 * @param options - Optional settings for the cookie:
 *   - `days`: Number of days before the cookie expires (default: 7).
 *   - `path`: Cookie path (default: "/").
 *   - `sameSite`: Cookie `SameSite` attribute (`"Lax" | "Strict" | "None"`, default: `"Lax"`).
 *   - `secure`: Whether the cookie should only be sent over HTTPS (default: `false`).
 *
 * @category Browser
 * @since 1.1.0
 */
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): void {
  if (!name) return;

  const { days = 7, path = "/", sameSite = "Lax", secure = false } = options;

  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  let cookieString = `${name}=${encodeURIComponent(
    value
  )}; expires=${expires}; path=${path}; SameSite=${sameSite}`;

  if (secure) cookieString += "; Secure";

  document.cookie = cookieString;
}
