/**
 * @vitest-environment jsdom
 */
import { setCookie } from "../../src/browser/setCookie";

describe("setCookie", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", { writable: true, value: "" });
  });

  it("sets cookie with correct format and default options", () => {
    setCookie("test", "value");
    expect(document.cookie).toContain("test=value");
  });

  it("supports custom options: expires, path, sameSite, secure", () => {
    setCookie("custom", "val", {
      expires: 1,
      path: "/app",
      sameSite: "Strict",
      secure: true,
    });
    expect(document.cookie).toContain("custom=val");
  });

  it("does nothing if cookie name is empty", () => {
    setCookie("", "value");
    expect(document.cookie).toBe("");
  });
});
