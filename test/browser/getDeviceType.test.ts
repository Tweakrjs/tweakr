/**
 * @vitest-environment jsdom
 */
import { getDeviceType } from "../../src/browser/getDeviceType";

describe("getDeviceType", () => {
  it("detects device type based on width", () => {
    Object.defineProperty(window, "innerWidth", { value: 500 });
    expect(getDeviceType()).toBe("mobile");
    Object.defineProperty(window, "innerWidth", { value: 900 });
    expect(getDeviceType()).toBe("tablet");
    Object.defineProperty(window, "innerWidth", { value: 1200 });
    expect(getDeviceType()).toBe("desktop");
  });
});
