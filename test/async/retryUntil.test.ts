import { retryUntil } from "../../src/async/retryUntil";

describe("retryUntil", () => {
  it("should retry until condition is met", async () => {
    let count = 0;
    const fn = async () => ++count;
    const result = await retryUntil(fn, (n) => n >= 3, 5);
    expect(result).toBe(3);
  });
});
