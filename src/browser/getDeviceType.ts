/**
 * Detects the current device type based on the window width.
 *
 * @example
 * ```ts
 * const device = getDeviceType();
 * console.log(device); // "mobile", "tablet", or "desktop"
 * ```
 *
 * @returns `"mobile" | "tablet" | "desktop"` depending on window width.
 *
 * @group Browser
 * @since 1.1.0
 */
export function getDeviceType(): "mobile" | "tablet" | "desktop" {
  const width = window.innerWidth;
  if (width < 768) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}
