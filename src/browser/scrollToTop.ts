/**
 * Scrolls the specified container to the top.
 *
 * Supports `window` or any `HTMLElement` with optional smooth scrolling and offset.
 * Falls back to instant scroll if smooth scrolling is not supported.
 *
 * @example
 * ```ts
 * scrollToTop(); // Scroll window smoothly to top
 *
 * const container = document.querySelector("#chat");
 * if (container) scrollToTop(container, "auto", -20); // Scroll a div instantly with offset
 * ```
 *
 * @param container - Scroll container (`window` or `HTMLElement`). Defaults to `window`.
 * @param behavior - Scroll behavior: `"smooth"` or `"auto"`. Defaults to `"smooth"`.
 * @param offset - Optional offset from top. Can be negative. Defaults to `0`.
 *
 * @group Browser
 * @since 1.2.0
 */
export function scrollToTop(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth",
  offset = 0
): void {
  const top = offset;

  if (container === window) {
    window.scrollTo({ top, behavior });
  } else if (container instanceof HTMLElement) {
    container.scrollTo({ top, behavior });
  }
}
