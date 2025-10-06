import { timeout } from "../../src/function/timeout";

describe("timeout", () => {
  it("should reject promise after timeout", async () => {
    const slow = () => new Promise((r) => setTimeout(() => r("ok"), 100));
    await expect(timeout(slow(), 50)).rejects.toThrow();
  });
});
