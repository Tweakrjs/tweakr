/**
 * @vitest-environment jsdom
 */
import { getThemePreference } from "../../src/browser/getThemePreference";

describe("getThemePreference", () => {
  it("returns dark or light", () => {
    window.matchMedia = () => ({ matches: true } as any);
    expect(getThemePreference()).toBe("dark");
    window.matchMedia = () => ({ matches: false } as any);
    expect(getThemePreference()).toBe("light");
  });
});
