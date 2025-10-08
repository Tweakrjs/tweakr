export interface CookieOptions {
  path?: string;
  expires?: Date | number; // number = days
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
}

/**
 * Sets a cookie with optional attributes.
 *
 * Supports `path`, `expires`, `secure`, and `sameSite`.
 *
 * @example
 * ```ts
 * setCookie("token", "abc123", { path: "/", expires: 7, secure: true, sameSite: "Strict" });
 * ```
 *
 * @param name - Cookie name.
 * @param value - Cookie value.
 * @param options - Optional cookie attributes.
 * @param options.path - Path for the cookie. Defaults to current path.
 * @param options.expires - Expiration date or number of days.
 * @param options.secure - Whether the cookie is secure.
 * @param options.sameSite - SameSite attribute (`Strict`, `Lax`, or `None`).
 *
 * @group Browser
 * @since 1.2.0
 */
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
) {
  // Skip if name is empty
  if (!name) return;

  let cookieStr = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  if (options.expires) {
    const d =
      options.expires instanceof Date
        ? options.expires
        : new Date(Date.now() + options.expires * 864e5); // expires in days
    cookieStr += `;expires=${d.toUTCString()}`;
  }
  if (options.path) cookieStr += `;path=${options.path}`;
  if (options.secure) cookieStr += `;secure`;
  if (options.sameSite) cookieStr += `;samesite=${options.sameSite}`;
  document.cookie = cookieStr;
}
