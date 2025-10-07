/**
 * @vitest-environment jsdom
 */
import { getCookie } from "../../src/browser/getCookie";

describe("getCookie", () => {
  beforeEach(() => {
    Object.defineProperty(document, "cookie", {
      writable: true,
      value: "",
    });
  });

  it("returns cookie value if present", () => {
    document.cookie = "token=123";
    expect(getCookie("token")).toBe("123");
  });

  it("returns null for missing cookie", () => {
    expect(getCookie("missing")).toBeNull();
  });

  it("handles cookies with '=' in value correctly", () => {
    document.cookie = "encoded=hello%3Dworld";
    expect(getCookie("encoded")).toBe("hello=world");
  });

  it("returns null for empty cookie name", () => {
    document.cookie = "foo=bar";
    expect(getCookie("")).toBeNull();
  });
});
