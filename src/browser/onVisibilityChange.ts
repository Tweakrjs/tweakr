export function onVisibilityChange(callback: (visible: boolean) => void): void {
  document.addEventListener("visibilitychange", () => {
    callback(!document.hidden);
  });
}
