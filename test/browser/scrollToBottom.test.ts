/**
 * @vitest-environment jsdom
 */
import { scrollToBottom } from "../../src/browser/scrollToBottom";

describe("scrollToBottom", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("scrolls window to bottom with smooth behavior by default", () => {
    window.scrollTo = vi.fn();

    scrollToBottom(window, "smooth", 500); // inject 500 as scrollHeight
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 500,
      behavior: "smooth",
    });
  });

  it("scrolls a custom HTMLElement to bottom", () => {
    const container = document.createElement("div");
    container.scrollTo = vi.fn();

    Object.defineProperty(container, "scrollHeight", {
      get: () => 1000,
      configurable: true,
    });

    scrollToBottom(container);
    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 1000,
      behavior: "smooth",
    });
  });
});
