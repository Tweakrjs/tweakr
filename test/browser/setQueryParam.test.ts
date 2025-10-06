/**
 * @vitest-environment jsdom
 */
import { setQueryParam } from "../../src/browser/setQueryParam";

describe("setQueryParam", () => {
  it("updates query param and replaces state", () => {
    const replace = vi
      .spyOn(window.history, "replaceState")
      .mockImplementation(() => {});
    Object.defineProperty(window, "location", {
      value: new URL("https://example.com"),
      writable: true,
    });
    setQueryParam("id", "123");
    expect(replace).toHaveBeenCalled();
    replace.mockRestore();
  });
});
