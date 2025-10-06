export function getScrollPosition(): { x: number; y: number } {
  return { x: window.scrollX, y: window.scrollY };
}
