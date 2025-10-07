/**
 * Sets or updates the page's favicon.
 *
 * @example
 * ```ts
 * // Set favicon to a custom URL
 * setFavicon("/assets/favicon.ico");
 * ```
 *
 * @param url - The URL of the favicon image.
 *
 * @group Browser
 * @since 1.1.0
 */
export function setFavicon(url: string): void {
  let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
  if (!link) {
    link = document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);
  }
  link.href = url;
}
