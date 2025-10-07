/**
 * Focuses the first element matching a CSS selector, if it exists and is not disabled.
 *
 * @example
 * ```ts
 * focusElement("#username"); // focuses the input with id="username"
 *
 * // Prevent scrolling while focusing
 * focusElement("#submitBtn", { preventScroll: true });
 * ```
 *
 * @param selector - A CSS selector string to locate the element.
 * @param options - Optional focus options (`preventScroll`).
 * @returns `true` if the element was found and focused, `false` otherwise.
 *
 * @group Browser
 * @since 1.1.0
 */
export function focusElement(
  selector: string,
  options?: FocusOptions
): boolean {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || el.hasAttribute("disabled")) return false;

  el.focus({ preventScroll: options?.preventScroll ?? false });
  return true;
}
