export function scrollToTop(
  container: HTMLElement | Window = window,
  behavior: ScrollBehavior = "smooth"
): void {
  if (container === window) {
    window.scrollTo({ top: 0, behavior });
  } else {
    container.scrollTo({ top: 0, behavior });
  }
}
