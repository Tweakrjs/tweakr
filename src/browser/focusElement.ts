/**
 * Focuses the first element matching a CSS selector.
 *
 * Skips disabled elements.
 * Optionally adds a temporary `tabindex` for non-focusable elements.
 *
 * @example
 * ```ts
 * focusElement("#username"); // Focuses input with id="username"
 *
 * focusElement("#submitBtn", { preventScroll: true, fallbackTabIndex: true });
 * ```
 *
 * @param selector - CSS selector to locate the element.
 * @param options - Focus options.
 * @param options.preventScroll - Prevent scrolling when focusing. Defaults to `false`.
 * @param options.fallbackTabIndex - Add `tabindex="-1"` if element is not focusable. Defaults to `false`.
 * @returns `true` if element was found and focused, `false` otherwise.
 *
 * @group Browser
 * @since 1.2.0
 */
export function focusElement(
  selector: string,
  options?: FocusOptions & { fallbackTabIndex?: boolean }
): boolean {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || el.hasAttribute("disabled")) return false;

  // Apply fallback tabindex even if offsetParent is null (needed for jsdom/testing)
  if (options?.fallbackTabIndex && !el.hasAttribute("tabindex")) {
    el.setAttribute("tabindex", "-1");
  }

  el.focus({ preventScroll: options?.preventScroll ?? false });
  return true;
}
