/**
 * @vitest-environment jsdom
 */
import { deleteCookie } from "../../src/browser/deleteCookie";

describe("deleteCookie", () => {
  beforeEach(() => {
    // Reset document.cookie before each test
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
  });

  it("removes the cookie from document.cookie", () => {
    document.cookie = "test=value";
    expect(document.cookie).toContain("test=value");

    deleteCookie("test");
    expect(document.cookie).not.toContain("test=value");
  });

  it("does nothing if cookie name is empty", () => {
    document.cookie = "foo=bar";
    deleteCookie("");
    expect(document.cookie).toContain("foo=bar");
  });

  it("respects custom path when deleting cookie", () => {
    document.cookie = "pathTest=value; path=/custom";
    deleteCookie("pathTest", "/custom");
    expect(document.cookie).not.toContain("pathTest=value");
  });
});
