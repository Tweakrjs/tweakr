import { describe, it, expect } from "vitest";
import { camelToKebab } from "../../src/string/camelToKebab";

describe("camelToKebab", () => {
  it("converts camelCase to kebab-case", () => {
    expect(camelToKebab("helloWorld")).toBe("hello-world");
    expect(camelToKebab("tweakrLibraryUtils")).toBe("tweakr-library-utils");
    expect(camelToKebab("single")).toBe("single");
    expect(camelToKebab("aBCDEf")).toBe("a-b-c-d-ef");
  });
});
