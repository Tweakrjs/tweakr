/**
 * Checks if the browser is currently online.
 *
 * @example
 * ```ts
 * if (isOnline()) {
 *   console.log("You are online!");
 * } else {
 *   console.log("You are offline.");
 * }
 * ```
 *
 * @returns `true` if the browser is online, `false` otherwise.
 *
 * @category Browser
 * @since 1.1.0
 */
export function isOnline(): boolean {
  return navigator.onLine;
}
