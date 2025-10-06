/**
 * @vitest-environment jsdom
 */
import { setFavicon } from "../../src/browser/setFavicon";

describe("setFavicon", () => {
  it("sets or creates favicon link", () => {
    setFavicon("icon.png");
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    expect(link?.href).toContain("icon.png");
  });
});
