/**
 * @vitest-environment jsdom
 */
import { scrollToTop } from "../../src/browser/scrollToTop";

describe("scrollToTop", () => {
  it("scrolls to top", () => {
    window.scrollTo = vi.fn();
    scrollToTop();
    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 0,
      behavior: "smooth",
    });
  });
});
