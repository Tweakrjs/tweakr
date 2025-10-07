/**
 * Detects the user's preferred color scheme.
 *
 * Uses the `prefers-color-scheme` media query to determine if the user
 * prefers a light or dark theme.
 *
 * @example
 * ```ts
 * const theme = getThemePreference();
 * console.log(theme); // "light" or "dark"
 * ```
 *
 * @returns `"light"` if the user prefers a light theme, `"dark"` if dark.
 *
 * @category Browser
 * @since 1.1.0
 */
export function getThemePreference(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}
