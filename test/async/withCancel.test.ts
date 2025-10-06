import { withCancel } from "../../src/async/withCancel";

describe("withCancel", () => {
  it("should cancel promise", async () => {
    const slow = new Promise((r) => setTimeout(() => r("done"), 100));
    const { promise, cancel } = withCancel(slow);
    cancel();
    await expect(promise).rejects.toThrow("Cancelled");
  });
});
