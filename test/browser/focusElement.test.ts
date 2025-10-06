/**
 * @vitest-environment jsdom
 */
import { focusElement } from "../../src/browser/focusElement";

describe("focusElement", () => {
  beforeEach(() => {
    document.body.innerHTML = ""; // clean DOM
    vi.restoreAllMocks();
  });

  it("focuses the element if it exists", () => {
    const input = document.createElement("input");
    input.focus = vi.fn();
    document.body.appendChild(input);
    const result = focusElement("input");
    expect(input.focus).toHaveBeenCalledWith({ preventScroll: false });
    expect(result).toBe(true);
  });

  it("does not throw if element does not exist", () => {
    const result = focusElement(".nonexistent");
    expect(result).toBe(false);
  });

  it("does not focus if element is disabled", () => {
    const input = document.createElement("input");
    input.disabled = true;
    input.focus = vi.fn();
    document.body.appendChild(input);
    const result = focusElement("input");
    expect(input.focus).not.toHaveBeenCalled();
    expect(result).toBe(false);
  });

  it("supports preventScroll option", () => {
    const input = document.createElement("input");
    input.focus = vi.fn();
    document.body.appendChild(input);
    focusElement("input", { preventScroll: true });
    expect(input.focus).toHaveBeenCalledWith({ preventScroll: true });
  });
});
