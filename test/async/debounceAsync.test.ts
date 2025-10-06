import { debounceAsync } from "../../src/async/debounceAsync";

describe("debounceAsync", () => {
  it("should only execute the last call after delay", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const debounced = debounceAsync(fn, 50);

    const p1 = debounced(2).catch(() => {}); // silently handle rejection
    const p2 = debounced(3);

    const result = await p2;
    expect(fn).toHaveBeenCalledTimes(1);
    expect(result).toBe(6);

    // No need to await p1 for assertion since .catch(() => {}) handles rejection
  });

  it("should allow manual cancellation", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const debounced = debounceAsync(fn, 50);

    const p = debounced(5);
    debounced.cancel();

    try {
      await p;
    } catch (err: any) {
      expect(err.message).toBe("Cancelled manually");
    }

    expect(fn).not.toHaveBeenCalled();
  });

  it("should resolve normally if not cancelled", async () => {
    const fn = vi.fn(async (x: number) => x + 1);
    const debounced = debounceAsync(fn, 20);

    const p = debounced(10);
    const result = await p;

    expect(result).toBe(11);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should handle multiple rapid calls without unhandled rejections", async () => {
    const fn = vi.fn(async (x: number) => x);
    const debounced = debounceAsync(fn, 30);

    const promises = [
      debounced(1).catch(() => {}), // silently handle cancellation
      debounced(2).catch(() => {}),
      debounced(3),
    ];

    const lastResult = await promises[promises.length - 1];
    expect(lastResult).toBe(3);

    expect(fn).toHaveBeenCalledTimes(1);
  });
});
