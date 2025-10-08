/**
 * Scrolls the specified container to the bottom.
 *
 * Supports `window` or any `HTMLElement` with optional smooth scrolling and offset.
 * Can override scroll height for testing purposes.
 *
 * @example
 * ```ts
 * scrollToBottom(); // Scroll window smoothly to bottom
 *
 * const container = document.querySelector("#chat");
 * if (container) scrollToBottom(container, "auto", -10); // Scroll a div instantly with offset
 * ```
 *
 * @param container - Scroll container (`window` or `HTMLElement`). Defaults to `window`.
 * @param behavior - Scroll behavior: `"smooth"` or `"auto"`. Defaults to `"smooth"`.
 * @param offset - Optional offset from bottom. Can be negative. Defaults to `0`.
 * @param scrollHeight - Optional override for scroll height.
 *
 * @group Browser
 * @since 1.2.0
 */
export function scrollToBottom(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth",
  offset = 0,
  scrollHeight?: number
): void {
  let height: number;

  if (container === window) {
    height =
      scrollHeight ??
      document.documentElement.scrollHeight ??
      document.body.scrollHeight ??
      0;
    window.scrollTo({ top: height + offset, behavior });
  } else if (container instanceof HTMLElement) {
    height = scrollHeight ?? container.scrollHeight;
    container.scrollTo({ top: height + offset, behavior });
  } else {
    throw new Error("scrollToBottom: container must be Window or HTMLElement");
  }
}
