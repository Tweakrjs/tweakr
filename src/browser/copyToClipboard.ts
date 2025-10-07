/**
 * Copies the provided text to the system clipboard.
 *
 * Uses the modern `navigator.clipboard.writeText` API when available,
 * with a fallback using a hidden textarea for older browsers.
 *
 * @example
 * ```ts
 * await copyToClipboard("Hello World");
 * console.log("Text copied to clipboard!");
 * ```
 *
 * @param text - The text string to copy to the clipboard.
 * @returns A promise that resolves when the text is successfully copied.
 *
 * @throws Will throw an error if copying fails.
 *
 * @group Browser
 * @since 1.1.0
 */
export async function copyToClipboard(text: string): Promise<void> {
  if (!text) return;

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return;
    }

    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Prevent page from scrolling
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "none";
    textarea.style.background = "transparent";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textarea);

    if (!successful) throw new Error("Fallback copy failed");
  } catch (err) {
    console.error("Failed to copy to clipboard:", err);
    throw err;
  }
}
