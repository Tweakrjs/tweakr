import { isOnline } from "../../src/browser/isOnline";

describe("isOnline", () => {
  it("returns navigator.onLine", () => {
    Object.defineProperty(navigator, "onLine", { value: true });
    expect(isOnline()).toBe(true);
  });
});
