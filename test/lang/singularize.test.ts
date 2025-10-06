import { singularize } from "../../src/lang/singularize";

describe("singularize", () => {
  it("should convert plural to singular", () => {
    expect(singularize("parties")).toBe("party");
    expect(singularize("buses")).toBe("bus");
    expect(singularize("cats")).toBe("cat");
    expect(singularize("dog")).toBe("dog");
  });
});
