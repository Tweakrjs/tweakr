/**
 * Reads text from the clipboard asynchronously.
 *
 * Uses `navigator.clipboard` if available. Returns `null` if unsupported or on error.
 *
 * @example
 * ```ts
 * const text = await readFromClipboard();
 * console.log(text);
 * ```
 *
 * @returns Clipboard text or `null`.
 *
 * @group Browser
 * @since 1.2.0
 */
export async function readFromClipboard(): Promise<string | null> {
  try {
    if (navigator.clipboard?.readText) {
      return await navigator.clipboard.readText();
    }
    return null;
  } catch {
    return null;
  }
}
