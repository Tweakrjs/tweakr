/**
 * Scrolls the specified container to the top.
 *
 * Can scroll the `window` or any `HTMLElement`. Supports smooth or instant scrolling.
 *
 * @example
 * ```ts
 * // Scroll the window smoothly to top
 * scrollToTop();
 *
 * // Scroll a specific div instantly
 * const container = document.querySelector("#chat");
 * if (container) scrollToTop(container, "auto");
 * ```
 *
 * @param container - The scroll container (`window` or an `HTMLElement`). Defaults to `window`.
 * @param behavior - Scroll behavior: `"auto"` or `"smooth"`. Defaults to `"smooth"`.
 *
 * @group Browser
 * @since 1.1.0
 */
export function scrollToTop(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth"
): void {
  if (container === window) {
    window.scrollTo({ top: 0, behavior });
  } else {
    container.scrollTo({ top: 0, behavior });
  }
}
