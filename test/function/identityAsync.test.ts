import { describe, it, expect } from "vitest";
import { identityAsync } from "../../src/function/identityAsync";

describe("identityAsync", () => {
  it("returns the same value", async () => {
    await expect(identityAsync(42)).resolves.toBe(42);
    await expect(identityAsync("hello")).resolves.toBe("hello");
  });
});
