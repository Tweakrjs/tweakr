/**
 * Returns the current scroll position of the window.
 *
 * @example
 * ```ts
 * const { x, y } = getScrollPosition();
 * console.log(`Scroll X: ${x}, Scroll Y: ${y}`);
 * ```
 *
 * @returns An object containing `x` (horizontal) and `y` (vertical) scroll coordinates.
 *
 * @group Browser
 * @since 1.1.0
 */
export function getScrollPosition(): { x: number; y: number } {
  return { x: window.scrollX, y: window.scrollY };
}
