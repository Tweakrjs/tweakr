import { describe, it, expect } from "vitest";
import { snakeToCamel } from "../../src/string/snakeToCamel";

describe("snakeToCamel", () => {
  it("converts snake_case to camelCase", () => {
    expect(snakeToCamel("hello_world")).toBe("helloWorld");
    expect(snakeToCamel("tweakr_library_utils")).toBe("tweakrLibraryUtils");
    expect(snakeToCamel("singleword")).toBe("singleword");
    expect(snakeToCamel("a_b_c_d")).toBe("aBCD");
  });
});
