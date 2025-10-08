/**
 * @vitest-environment jsdom
 */
import { focusElement } from "../../src/browser/focusElement";

describe("focusElement", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
  });

  it("focuses the element if it exists", () => {
    const input = document.createElement("input");
    document.body.appendChild(input);
    const spy = vi.spyOn(input, "focus");

    const result = focusElement("input");
    expect(spy).toHaveBeenCalledWith({ preventScroll: false });
    expect(result).toBe(true);
  });

  it("does not throw if element does not exist", () => {
    expect(focusElement(".nonexistent")).toBe(false);
  });

  it("does not focus if element is disabled", () => {
    const input = document.createElement("input");
    input.disabled = true;
    const spy = vi.spyOn(input, "focus");
    document.body.appendChild(input);

    const result = focusElement("input");
    expect(spy).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });

  it("supports preventScroll option", () => {
    const input = document.createElement("input");
    const spy = vi.spyOn(input, "focus");
    document.body.appendChild(input);

    focusElement("input", { preventScroll: true });
    expect(spy).toHaveBeenCalledWith({ preventScroll: true });
  });

  it("adds temporary tabindex if fallbackTabIndex is true", () => {
    const div = document.createElement("div");
    document.body.appendChild(div);

    focusElement("div", { fallbackTabIndex: true });
    expect(div.getAttribute("tabindex")).toBe("-1");
  });
});
