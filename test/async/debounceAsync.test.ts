import { describe, it, expect, vi } from "vitest";
import { debounceAsync } from "../../src/async/debounceAsync";

describe("debounceAsync", () => {
  it("executes only the last call after delay", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const debounced = debounceAsync(fn, 50);

    const p1 = debounced(2).catch(() => {});
    const p2 = debounced(3);

    const result = await p2;
    expect(fn).toHaveBeenCalledTimes(1);
    expect(result).toBe(6);
  });

  it("supports manual cancellation", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const debounced = debounceAsync(fn, 50);

    const p = debounced(5);
    debounced.cancel();

    await expect(p).rejects.toThrow("Cancelled manually");
    expect(fn).not.toHaveBeenCalled();
  });

  it("resolves normally if not cancelled", async () => {
    const fn = vi.fn(async (x: number) => x + 1);
    const debounced = debounceAsync(fn, 20);

    const result = await debounced(10);
    expect(result).toBe(11);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("handles multiple rapid calls without unhandled rejections", async () => {
    const fn = vi.fn(async (x: number) => x);
    const debounced = debounceAsync(fn, 30);

    const promises = [
      debounced(1).catch(() => {}),
      debounced(2).catch(() => {}),
      debounced(3),
    ];

    const lastResult = await promises[promises.length - 1];
    expect(lastResult).toBe(3);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
