/**
 * @vitest-environment jsdom
 */

import { copyToClipboard } from "../../src/browser/copyToClipboard";

describe("copyToClipboard", () => {
  it("uses Clipboard API when available", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.assign(navigator, { clipboard: { writeText } });
    await copyToClipboard("hello");
    expect(writeText).toHaveBeenCalledWith("hello");
  });

  it("falls back to execCommand if clipboard is missing", async () => {
    delete (navigator as any).clipboard;
    document.execCommand = vi.fn();
    await copyToClipboard("world");
    expect(document.execCommand).toHaveBeenCalledWith("copy");
  });
});
