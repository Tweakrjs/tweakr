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
