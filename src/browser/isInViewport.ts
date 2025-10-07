/**
 * Checks if an element is fully within the viewport.
 *
 * @example
 * ```ts
 * const el = document.querySelector("#myElement");
 * if (el && isInViewport(el)) {
 *   console.log("Element is visible in viewport");
 * }
 * ```
 *
 * @param element - The DOM element to check.
 * @returns `true` if the element is completely visible in the viewport, `false` otherwise.
 *
 * @category Browser
 * @since 1.1.0
 */
export function isInViewport(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
