/**
 * @vitest-environment jsdom
 */
import { scrollToTop } from "../../src/browser/scrollToTop";

describe("scrollToTop", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("scrolls window to top with default smooth behavior", () => {
    window.scrollTo = vi.fn();
    scrollToTop();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls window to top with specified behavior", () => {
    window.scrollTo = vi.fn();
    scrollToTop(window, "auto");
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "auto" });
  });

  it("scrolls window to top with offset", () => {
    window.scrollTo = vi.fn();
    scrollToTop(window, "smooth", 100);
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 100,
      behavior: "smooth",
    });
  });

  it("scrolls a custom HTMLElement to top with default behavior", () => {
    const container = document.createElement("div");
    container.scrollTo = vi.fn();
    scrollToTop(container);
    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });

  it("scrolls a custom HTMLElement to top with specified behavior and offset", () => {
    const container = document.createElement("div");
    container.scrollTo = vi.fn();
    scrollToTop(container, "auto", 50);
    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 50,
      behavior: "auto",
    });
  });
});
