import { describe, it, expect } from "vitest";
import { getHonorificSuffix } from "../../src/string/getHonorificSuffix";

describe("getHonorificSuffix", () => {
  it("detects honorific suffix", () => {
    expect(getHonorificSuffix("John Doe Jr.")).toBe("Jr.");
    expect(getHonorificSuffix("Jane Smith IV")).toBe("IV");
  });

  it("returns null if no suffix present", () => {
    expect(getHonorificSuffix("Alice Johnson")).toBeNull();
  });

  it("handles trailing spaces", () => {
    expect(getHonorificSuffix("John Doe Jr. ")).toBe("Jr.");
  });

  it("handles suffix without preceding space", () => {
    expect(getHonorificSuffix("John DoeJr.")).toBe("Jr.");
  });

  it("handles empty string", () => {
    expect(getHonorificSuffix("")).toBeNull();
  });
});
