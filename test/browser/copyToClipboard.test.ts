/**
 * @vitest-environment jsdom
 */
import { copyToClipboard } from "../../src/browser/copyToClipboard";

describe("copyToClipboard", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    // Reset navigator.clipboard for each test
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

  it("throws an error if fallback execCommand fails", async () => {
    document.execCommand = vi.fn().mockReturnValue(false);

    await expect(copyToClipboard("fail")).rejects.toThrow(
      "Fallback copy failed"
    );
  });

  it("does nothing if text is empty", async () => {
    const writeText = vi.fn();
    Object.assign(navigator, { clipboard: { writeText } });
    await copyToClipboard("");
    expect(writeText).not.toHaveBeenCalled();
    expect(document.body.querySelector("textarea")).toBeNull();
  });
});
