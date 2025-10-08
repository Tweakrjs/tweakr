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

  it("returns null when Clipboard API is unavailable", async () => {
    const result = await readFromClipboard();
    expect(result).toBeNull();
  });

  it("returns null if Clipboard API rejects", async () => {
    const readText = vi.fn().mockRejectedValue(new Error("denied"));
    Object.assign(navigator, { clipboard: { readText } });

    const result = await readFromClipboard();
    expect(result).toBeNull();
  });
});
