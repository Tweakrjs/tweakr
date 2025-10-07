/**
 * @interface CookieOptions
 * @description Options for configuring a browser cookie.
 */
interface CookieOptions {
  /**
   * @property {number} [days]
   * @description The number of days until the cookie expires. If not provided,
   * the cookie will typically be a session cookie (expires when the browser closes).
   */
  days?: number; // number of days before expiration

  /**
   * @property {string} [path]
   * @description The path for which the cookie is valid. Defaults to the
   * current document location.
   */
  path?: string;

  /**
   * @property {"Lax" | "Strict" | "None"} [sameSite]
   * @description Controls whether the cookie is sent with cross-site requests,
   * providing some protection against cross-site request forgery attacks.
   * - "Lax": Sent with navigation requests, but not other cross-site requests.
   * - "Strict": Only sent with requests originating from the same site.
   * - "None": Sent with all requests, but requires the 'secure' attribute.
   */
  sameSite?: "Lax" | "Strict" | "None";

  /**
   * @property {boolean} [secure]
   * @description Indicates that the cookie should only be sent over secure
   * protocols (HTTPS). This attribute is required if `sameSite` is set to "None".
   */
  secure?: boolean;
}
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
