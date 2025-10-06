import { escapeHtml } from "../../src/string/escapeHtml";

describe("escapeHtml", () => {
  it("should escape HTML special characters", () => {
    expect(escapeHtml('<div>"Hello"&\'</div>')).toBe(
      "&lt;div&gt;&quot;Hello&quot;&amp;&#39;&lt;/div&gt;"
    );
  });
});
