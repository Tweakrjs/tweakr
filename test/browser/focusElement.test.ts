/**
 * @vitest-environment jsdom
 */
import { focusElement } from "../../src/browser/focusElement";

describe("focusElement", () => {
  it("focuses the element if it exists", () => {
    const el = document.createElement("input");
    el.focus = vi.fn();
    document.body.appendChild(el);
    focusElement("input");
    expect(el.focus).toHaveBeenCalled();
  });
});
