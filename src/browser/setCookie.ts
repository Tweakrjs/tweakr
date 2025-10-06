interface CookieOptions {
  days?: number; // number of days before expiration
  path?: string;
  sameSite?: "Lax" | "Strict" | "None";
  secure?: boolean;
}

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
