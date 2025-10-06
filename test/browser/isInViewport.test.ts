/**
 * @vitest-environment jsdom
 */
import { isInViewport } from "../../src/browser/isInViewport";

describe("isInViewport", () => {
  it("returns true for element in viewport", () => {
    const el = document.createElement("div");
    el.getBoundingClientRect = () =>
      ({ top: 0, left: 0, bottom: 100, right: 100 } as any);
    expect(isInViewport(el)).toBe(true);
  });
});
