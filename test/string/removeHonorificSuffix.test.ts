import { describe, it, expect } from "vitest";
import { removeHonorificSuffix } from "../../src/string/removeHonorificSuffix";

describe("removeHonorificSuffix", () => {
  it("removes the suffix if present", () => {
    expect(removeHonorificSuffix("John Doe Jr.")).toBe("John Doe");
    expect(removeHonorificSuffix("Jane Smith IV")).toBe("Jane Smith");
  });

  it("returns the string unchanged if suffix not present", () => {
    expect(removeHonorificSuffix("Alice Johnson")).toBe("Alice Johnson");
  });

  it("handles trailing spaces", () => {
    expect(removeHonorificSuffix("John Doe Jr. ")).toBe("John Doe");
  });

  it("handles suffix without preceding space", () => {
    expect(removeHonorificSuffix("John DoeJr.")).toBe("John Doe");
  });

  it("handles empty string", () => {
    expect(removeHonorificSuffix("")).toBe("");
  });
});
