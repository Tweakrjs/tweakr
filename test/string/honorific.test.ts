import { describe, it, expect } from "vitest";
import {
  removeHonorificSuffix,
  getHonorificSuffix,
} from "../../src/string/honorific";

describe("removeHonorificSuffix", () => {
  it("removes common honorifics with space", () => {
    expect(removeHonorificSuffix("John Doe Jr.")).toBe("John Doe");
    expect(removeHonorificSuffix("Jane Smith Sr.")).toBe("Jane Smith");
    expect(removeHonorificSuffix("Robert Brown III")).toBe("Robert Brown");
  });

  it("removes honorifics without preceding space", () => {
    expect(removeHonorificSuffix("AliceII")).toBe("Alice");
    expect(removeHonorificSuffix("BobV")).toBe("Bob");
  });

  it("returns string unchanged if no honorific", () => {
    expect(removeHonorificSuffix("Emily Davis")).toBe("Emily Davis");
    expect(removeHonorificSuffix("Michael")).toBe("Michael");
  });

  it("handles empty string", () => {
    expect(removeHonorificSuffix("")).toBe("");
  });

  it("handles multiple honorific-like patterns but only removes last", () => {
    expect(removeHonorificSuffix("John Jr. III")).toBe("John Jr.");
  });
});

describe("getHonorificSuffix", () => {
  it("returns the honorific if present", () => {
    expect(getHonorificSuffix("John Doe Jr.")).toBe("Jr.");
    expect(getHonorificSuffix("Jane Smith III")).toBe("III");
    expect(getHonorificSuffix("AliceII")).toBe("II");
  });

  it("returns null if no honorific", () => {
    expect(getHonorificSuffix("Emily Davis")).toBeNull();
    expect(getHonorificSuffix("Michael")).toBeNull();
  });

  it("handles multiple honorific-like patterns and returns last", () => {
    expect(getHonorificSuffix("John Jr. III")).toBe("III");
  });

  it("handles empty string", () => {
    expect(getHonorificSuffix("")).toBeNull();
  });
});
