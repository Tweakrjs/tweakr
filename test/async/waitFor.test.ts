import { waitFor } from "../../src/async/waitFor";

describe("waitFor", () => {
  it("should resolve when condition is met (sync condition)", async () => {
    let ready = false;
    setTimeout(() => (ready = true), 30);
    await waitFor(() => ready, { interval: 10, timeoutMs: 100 });
    expect(ready).toBe(true);
  });

  it("should resolve when condition is met (async condition)", async () => {
    let count = 0;
    const condition = async () => {
      count++;
      return count >= 3;
    };
    await waitFor(condition, { interval: 10, timeoutMs: 100 });
    expect(count).toBeGreaterThanOrEqual(3);
  });

  it("should throw on timeout", async () => {
    const condition = () => false;
    await expect(
      waitFor(condition, { interval: 10, timeoutMs: 50 })
    ).rejects.toThrow("Timeout waiting for condition");
  });

  it("should accept dynamic polling interval", async () => {
    let ready = false;
    setTimeout(() => (ready = true), 50);
    let pollCount = 0;

    await waitFor(() => ready, {
      interval: () => {
        pollCount++;
        return 10;
      },
      timeoutMs: 100,
    });

    expect(ready).toBe(true);
    expect(pollCount).toBeGreaterThan(0);
  });

  it("should return immediately if condition is already true", async () => {
    const condition = () => true;
    const start = Date.now();
    await waitFor(condition, { interval: 10, timeoutMs: 100 });
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(20); // almost immediate
  });
});
