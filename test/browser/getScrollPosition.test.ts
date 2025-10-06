/**
 * @vitest-environment jsdom
 */
import { getScrollPosition } from "../../src/browser/getScrollPosition";

describe("getScrollPosition", () => {
  it("returns scroll position", () => {
    Object.defineProperty(window, "scrollX", { value: 10 });
    Object.defineProperty(window, "scrollY", { value: 20 });
    expect(getScrollPosition()).toEqual({ x: 10, y: 20 });
  });
});
