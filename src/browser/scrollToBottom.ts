/**
 * Scrolls the specified container to the bottom.
 *
 * Can scroll the `window` or any `HTMLElement`. Supports smooth or instant scrolling.
 *
 * @example
 * ```ts
 * // Scroll the window smoothly to bottom
 * scrollToBottom();
 *
 * // Scroll a specific div instantly
 * const container = document.querySelector("#chat");
 * if (container) scrollToBottom(container, "auto");
 * ```
 *
 * @param container - The scroll container (`window` or an `HTMLElement`). Defaults to `window`.
 * @param behavior - Scroll behavior: `"auto"` or `"smooth"`. Defaults to `"smooth"`.
 * @param scrollHeight - Optional override for scroll height (useful for testing).
 *
 * @throws Will throw an error if `container` is neither `Window` nor `HTMLElement`.
 *
 * @category Browser
 * @since 1.1.0
 */
export function scrollToBottom(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth",
  scrollHeight?: number
): void {
  if (container === window) {
    const height =
      scrollHeight ??
      document.documentElement.scrollHeight ??
      document.body.scrollHeight ??
      0;
    window.scrollTo({ top: height, behavior });
  } else if (container instanceof HTMLElement) {
    const height = scrollHeight ?? container.scrollHeight;
    container.scrollTo({ top: height, behavior });
  } else {
    throw new Error("scrollToBottom: container must be Window or HTMLElement");
  }
}
