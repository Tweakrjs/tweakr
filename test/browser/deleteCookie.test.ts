/**
 * @vitest-environment jsdom
 */

import { deleteCookie } from "../../src/browser/deleteCookie";

describe("deleteCookie", () => {
  it("removes the cookie from document.cookie", () => {
    // First, set a cookie manually
    document.cookie = "test=value";
    expect(document.cookie).toContain("test=value");

    // Then, delete it
    deleteCookie("test");

    // Now, the cookie should be gone
    expect(document.cookie).not.toContain("test=value");
  });
});
