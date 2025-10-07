/**
 * Triggers a file download in the browser.
 *
 * Accepts either a `Blob` object or a string URL and downloads it with the specified filename.
 *
 * @example
 * ```ts
 * // Download a text file
 * const blob = new Blob(["Hello World"], { type: "text/plain" });
 * downloadFile(blob, "hello.txt");
 *
 * // Download from a URL
 * downloadFile("https://example.com/file.pdf", "file.pdf");
 * ```
 *
 * @param data - The file data as a `Blob` or a string URL.
 * @param filename - The desired name of the downloaded file.
 *
 * @group Browser
 * @since 1.1.0
 */
export function downloadFile(data: Blob | string, filename: string): void {
  const url = typeof data === "string" ? data : URL.createObjectURL(data);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  if (typeof data !== "string") URL.revokeObjectURL(url);
}
