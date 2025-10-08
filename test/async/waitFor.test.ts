import { describe, it, expect } from "vitest";
import { waitFor } from "../../src/async/waitFor";

describe("waitFor", () => {
  it("resolves when condition is immediately true", async () => {
    let called = false;
    await waitFor(() => {
      called = true;
      return true;
    });
    expect(called).toBe(true);
  });

  it("resolves when condition becomes true after some time", async () => {
    let ready = false;
    setTimeout(() => {
      ready = true;
    }, 100);

    await waitFor(() => ready, { interval: 50, timeoutMs: 500 });
    expect(ready).toBe(true);
  });

  it("rejects if timeout is exceeded", async () => {
    let ready = false;
    await expect(
      waitFor(() => ready, { interval: 50, timeoutMs: 100 })
    ).rejects.toThrow("Timeout waiting for condition");
  });

  it("supports asynchronous condition function", async () => {
    let count = 0;
    setTimeout(() => {
      count = 3;
    }, 100);

    await waitFor(async () => count === 3, { interval: 20, timeoutMs: 500 });

    expect(count).toBe(3);
  });

  it("supports dynamic interval function", async () => {
    let ready = false;
    setTimeout(() => {
      ready = true;
    }, 50);
    const start = Date.now();

    await waitFor(() => ready, {
      interval: () => 10,
      timeoutMs: 200,
    });

    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(50);
  });

  it("supports asynchronous interval function", async () => {
    let ready = false;
    setTimeout(() => {
      ready = true;
    }, 50);

    await waitFor(() => ready, {
      interval: async () => 10,
      timeoutMs: 200,
    });

    expect(ready).toBe(true);
  });

  it("throws custom error message on timeout", async () => {
    await expect(
      waitFor(() => false, {
        interval: 50,
        timeoutMs: 50,
        errorMessage: "Custom timeout",
      })
    ).rejects.toThrow("Custom timeout");
  });
});
