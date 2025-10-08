/**
 * @vitest-environment jsdom
 */
import { scrollToBottom } from "../../src/browser/scrollToBottom";

describe("scrollToBottom", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("scrolls window to bottom with default smooth behavior", () => {
    window.scrollTo = vi.fn();
    scrollToBottom(window);
    const expectedHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expectedHeight,
      behavior: "smooth",
    });
  });

  it("scrolls window to bottom with specified behavior", () => {
    window.scrollTo = vi.fn();
    scrollToBottom(window, "auto");
    const expectedHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: expectedHeight,
      behavior: "auto",
    });
  });

  it("scrolls window to bottom with offset and custom scrollHeight", () => {
    window.scrollTo = vi.fn();
    // offset = 500, scrollHeight = 500 → top = 1000
    scrollToBottom(window, "smooth", 500, 500);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 1000,
      behavior: "smooth",
    });
  });

  it("scrolls a custom HTMLElement to bottom with default behavior", () => {
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

  it("scrolls a custom HTMLElement to bottom with offset and specified behavior", () => {
    const container = document.createElement("div");
    container.scrollTo = vi.fn();
    Object.defineProperty(container, "scrollHeight", {
      get: () => 800,
      configurable: true,
    });

    scrollToBottom(container, "auto", 100);
    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 900,
      behavior: "auto",
    });
  });
});
