/**
 * @vitest-environment jsdom
 */
import { getUserLanguage } from "../../src/browser/getUserLanguage";

describe("getUserLanguage", () => {
  it("returns navigator.language", () => {
    vi.spyOn(window.navigator, "language", "get").mockReturnValue("en-US");

    expect(getUserLanguage()).toBe("en-US");

    vi.restoreAllMocks();
  });
});
