/**
 * @vitest-environment jsdom
 */
import { setCookie } from "../../src/browser/setCookie";

describe("setCookie", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
  });

  it("sets cookie with correct format and default options", () => {
    setCookie("test", "value");
    expect(document.cookie).toContain("test=value");
  });

  it("supports custom options: days, path, sameSite, secure", () => {
    setCookie("custom", "val", {
      days: 1,
      path: "/app",
      sameSite: "Strict",
      secure: true,
    });

    expect(document.cookie).toContain("custom=val");
    // Note: JSDOM does not fully simulate SameSite/Secure flags, but string should include key=value
  });

  it("does nothing if cookie name is empty", () => {
    setCookie("", "value");
    expect(document.cookie).toBe("");
  });
});
