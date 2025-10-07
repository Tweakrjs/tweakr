/**
 * Registers a callback to be invoked whenever the page visibility changes.
 *
 * @example
 * ```ts
 * onVisibilityChange((visible) => {
 *   if (visible) {
 *     console.log("Page is now visible");
 *   } else {
 *     console.log("Page is hidden");
 *   }
 * });
 * ```
 *
 * @param callback - Function to call with `true` when page is visible, `false` when hidden.
 *
 * @group Browser
 * @since 1.1.0
 */
export function onVisibilityChange(callback: (visible: boolean) => void): void {
  document.addEventListener("visibilitychange", () => {
    callback(!document.hidden);
  });
}
