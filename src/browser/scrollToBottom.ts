export function scrollToBottom(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth",
  scrollHeight?: number // optional override for tests
): void {
  if (container === window) {
    // For window, get scrollHeight from document
    const height =
      scrollHeight ??
      document.documentElement.scrollHeight ??
      document.body.scrollHeight ??
      0;
    window.scrollTo({ top: height, behavior });
  } else if (container instanceof HTMLElement) {
    // TypeScript now knows container is HTMLElement
    const height = scrollHeight ?? container.scrollHeight;
    container.scrollTo({ top: height, behavior });
  } else {
    // Just in case someone passes something weird
    throw new Error("scrollToBottom: container must be Window or HTMLElement");
  }
}
