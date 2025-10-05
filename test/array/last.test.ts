import { describe, it, expect } from "vitest";
import { last } from "../../src/array/last";

describe("last", () => {
  it("returns last element", () => {
    expect(last([10, 20, 30])).toBe(30);
  });
});
