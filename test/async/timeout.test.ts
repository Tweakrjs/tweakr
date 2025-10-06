import { timeout } from "../../src/async/timeout";

describe("timeout", () => {
  it("should reject after timeout", async () => {
    const slow = new Promise((r) => setTimeout(() => r("done"), 100));
    await expect(timeout(slow, 10)).rejects.toThrow("Timeout");
  });
});
