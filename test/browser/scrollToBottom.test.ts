/**
 * @vitest-environment jsdom
 */
import { scrollToBottom } from "../../src/browser/scrollToBottom";

describe("scrollToBottom", () => {
  it("scrolls to bottom", () => {
    window.scrollTo = vi.fn();
    scrollToBottom();
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
