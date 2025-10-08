/**
 * @vitest-environment jsdom
 */
import { copyToClipboard } from "../../src/browser/copyToClipboard";

describe("copyToClipboard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    (navigator as any).clipboard = undefined;
  });

  it("uses Clipboard API when available", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });

    await copyToClipboard("hello");
    expect(writeText).toHaveBeenCalledWith("hello");
  });

  it("falls back to execCommand if Clipboard API is missing", async () => {
    document.execCommand = vi.fn().mockReturnValue(true);

    await copyToClipboard("world");
    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });

  it("returns false if fallback execCommand fails", async () => {
    document.execCommand = vi.fn().mockReturnValue(false);

    const result = await copyToClipboard("fail");
    expect(result).toBe(false);
  });

  it("returns true if text is empty (does nothing but resolves)", async () => {
    const writeText = vi.fn();
    Object.assign(navigator, { clipboard: { writeText } });

    const result = await copyToClipboard("");
    expect(result).toBe(true);

    // Remove the old assertion — writeText should NOT be called for empty strings
    expect(writeText).not.toHaveBeenCalled();
  });
});
