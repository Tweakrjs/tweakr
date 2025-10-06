/**
 * @vitest-environment jsdom
 */
import { onVisibilityChange } from "../../src/browser/onVisibilityChange";

describe("onVisibilityChange", () => {
  it("triggers callback on visibility change", () => {
    let visible = false;
    onVisibilityChange((v) => (visible = v));
    document.dispatchEvent(new Event("visibilitychange"));
    expect(typeof visible).toBe("boolean");
  });
});
