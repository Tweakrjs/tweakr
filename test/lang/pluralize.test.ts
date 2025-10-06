import { pluralize } from "../../src/lang/pluralize";

describe("pluralize", () => {
  it("should pluralize words correctly", () => {
    expect(pluralize("cat", 1)).toBe("cat");
    expect(pluralize("cat", 2)).toBe("cats");
    expect(pluralize("party", 2)).toBe("parties");
    expect(pluralize("bus", 2)).toBe("buses");
  });
});
