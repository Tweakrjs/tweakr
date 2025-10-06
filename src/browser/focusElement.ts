export function focusElement(
  selector: string,
  options?: FocusOptions
): boolean {
  const el = document.querySelector<HTMLElement>(selector);
  if (!el || el.hasAttribute("disabled")) return false;

  el.focus({ preventScroll: options?.preventScroll ?? false });
  return true;
}
