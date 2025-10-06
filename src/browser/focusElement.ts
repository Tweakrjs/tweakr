export function focusElement(selector: string): void {
  const el = document.querySelector<HTMLElement>(selector);
  if (el) el.focus();
}
