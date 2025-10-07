/**
 * Returns the user's preferred language setting from the browser.
 *
 * Falls back to `"en"` if no language information is available.
 *
 * @example
 * ```ts
 * const lang = getUserLanguage();
 * console.log(lang); // e.g., "en-US"
 * ```
 *
 * @returns A string representing the user's language, e.g., `"en-US"`.
 *
 * @group Browser
 * @since 1.1.0
 */
export function getUserLanguage(): string {
  return navigator.language || (navigator as any).userLanguage || "en";
}
