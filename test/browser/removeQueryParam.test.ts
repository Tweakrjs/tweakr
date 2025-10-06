/**
 * @vitest-environment jsdom
 */
import { removeQueryParam } from "../../src/browser/removeQueryParam";

describe("removeQueryParam", () => {
  it("removes param from URL", () => {
    const replace = vi
      .spyOn(window.history, "replaceState")
      .mockImplementation(() => {});
    Object.defineProperty(window, "location", {
      value: new URL("https://example.com/?id=1&name=John"),
      writable: true,
    });
    removeQueryParam("id");
    expect(replace).toHaveBeenCalled();
    replace.mockRestore();
  });
});
