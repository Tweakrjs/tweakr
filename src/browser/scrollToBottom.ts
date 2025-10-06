export function scrollToBottom(behavior: ScrollBehavior = "smooth"): void {
  window.scrollTo({ top: document.body.scrollHeight, behavior });
}
