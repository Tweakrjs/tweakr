import { describe, it, expect } from "vitest";
import { noopAsync } from "../../src/function/noopAsync";

describe("noopAsync", () => {
  it("resolves immediately", async () => {
    await expect(noopAsync()).resolves.toBeUndefined();
  });
});
