/**
 * @vitest-environment jsdom
 */

import { getQueryParam } from "../../src/browser/getQueryParam";

describe("getQueryParam", () => {
  it("returns query param value", () => {
    Object.defineProperty(window, "location", { value: { search: "?id=42" } });
    expect(getQueryParam("id")).toBe("42");
  });
});
