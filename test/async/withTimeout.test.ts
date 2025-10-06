import { withTimeout } from "../../src/async/withTimeout";

describe("withTimeout", () => {
  it("should reject if function exceeds timeout", async () => {
    const fn = async () => await new Promise((r) => setTimeout(r, 100));
    const wrapped = withTimeout(fn, 20);
    await expect(wrapped()).rejects.toThrow("Timeout");
  });
});
