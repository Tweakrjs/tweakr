/**
 * @vitest-environment jsdom
 */
import { setCookie } from "../../src/browser/setCookie";

describe("setCookie", () => {
  it("sets cookie with correct format", () => {
    setCookie("test", "value");
    expect(document.cookie).toContain("test=value");
  });
});
