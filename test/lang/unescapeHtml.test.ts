import { unescapeHtml } from "../../src/lang/unescapeHtml";

describe("unescapeHtml", () => {
  it("should convert HTML entities back", () => {
    expect(unescapeHtml("&lt;div&gt;Hello&lt;/div&gt;")).toBe(
      "<div>Hello</div>"
    );
    expect(unescapeHtml("&amp;&quot;&#39;")).toBe("&\"'");
  });
});
