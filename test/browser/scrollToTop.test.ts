/**
 * @vitest-environment jsdom
 */
import { scrollToTop } from "../../src/browser/scrollToTop";

describe("scrollToTop", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("scrolls window to top with smooth behavior by default", () => {
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

  it("scrolls a custom HTMLElement to top", () => {
    const container = document.createElement("div");
    container.scrollTo = vi.fn();

    scrollToTop(container);
    expect(container.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
