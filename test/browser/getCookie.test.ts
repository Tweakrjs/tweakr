/**
 * @vitest-environment jsdom
 */
import { getCookie } from "../../src/browser/getCookie";

describe("getCookie", () => {
  it("returns cookie value", () => {
    document.cookie = "token=123";
    expect(getCookie("token")).toBe("123");
  });

  it("returns null for missing cookie", () => {
    expect(getCookie("missing")).toBeNull();
  });
});
