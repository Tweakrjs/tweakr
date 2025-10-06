import { readFromClipboard } from "../../src/browser/readFromClipboard";

describe("readFromClipboard", () => {
  it("reads text from clipboard", async () => {
    const readText = vi.fn().mockResolvedValue("data");
    Object.assign(navigator, { clipboard: { readText } });
    const result = await readFromClipboard();
    expect(result).toBe("data");
  });
});
