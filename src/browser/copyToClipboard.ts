/**
 * Copies a string to the clipboard.
 *
 * Uses `navigator.clipboard` if available, otherwise falls back to a hidden textarea.
 * Returns `true` if the operation succeeds, `false` otherwise.
 *
 * @example
 * ```ts
 * await copyToClipboard("Hello, world!");
 * ```
 *
 * @param text - Text to copy to clipboard.
 * @returns `true` if successful, `false` otherwise.
 *
 * @group Browser
 * @since 1.2.0
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (!text) return true; // short-circuit for empty strings

    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();

      const successful = document.execCommand("copy"); // true if succeeded
      document.body.removeChild(textarea);

      return successful;
    }
  } catch {
    return false;
  }
}
