/**
 * Reads text from the system clipboard.
 *
 * Uses the modern `navigator.clipboard.readText` API when available.
 * Throws an error if the API is unsupported or requires user interaction.
 *
 * @example
 * ```ts
 * try {
 *   const text = await readFromClipboard();
 *   console.log("Clipboard text:", text);
 * } catch (err) {
 *   console.error(err);
 * }
 * ```
 *
 * @returns A promise that resolves with the clipboard text.
 *
 * @throws Will throw an error if reading from the clipboard is not supported.
 *
 * @group Browser
 * @since 1.1.0
 */
export async function readFromClipboard(): Promise<string> {
  if (navigator.clipboard?.readText) {
    try {
      return await navigator.clipboard.readText();
    } catch (err) {
      console.error("Failed to read from clipboard:", err);
      throw err;
    }
  }

  // Fallback is tricky because reading from clipboard without user action is blocked
  throw new Error(
    "Clipboard API not supported or requires a secure context with user interaction"
  );
}
