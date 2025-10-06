/**
 * @vitest-environment jsdom
 */
import { readFromClipboard } from "../../src/browser/readFromClipboard";

describe("readFromClipboard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    (navigator as any).clipboard = undefined;
  });

  it("reads text from Clipboard API when available", async () => {
    const readText = vi.fn().mockResolvedValue("data");
    Object.assign(navigator, { clipboard: { readText } });

    const result = await readFromClipboard();
    expect(result).toBe("data");
    expect(readText).toHaveBeenCalled();
  });

  it("throws error when Clipboard API is unavailable", async () => {
    await expect(readFromClipboard()).rejects.toThrow(
      "Clipboard API not supported or requires a secure context with user interaction"
    );
  });

  it("throws error if Clipboard API rejects", async () => {
    const readText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.assign(navigator, { clipboard: { readText } });

    await expect(readFromClipboard()).rejects.toThrow("denied");
  });
});
