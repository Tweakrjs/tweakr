import { retryBackoff } from "../../src/async/retryBackoff";

describe("retryBackoff", () => {
  it("should succeed on first attempt", async () => {
    const fn = vi.fn(async () => "success");
    const result = await retryBackoff(fn, { retries: 3, baseDelay: 10 });
    expect(result).toBe("success");
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should retry until success with exponential backoff", async () => {
    let count = 0;
    const fn = async () => {
      if (count++ < 2) throw new Error("fail");
      return "done";
    };

    const result = await retryBackoff(fn, { retries: 3, baseDelay: 10 });
    expect(result).toBe("done");
    expect(count).toBe(3);
  });

  it("should throw after max retries", async () => {
    const fn = async () => {
      throw new Error("fail");
    };

    await expect(
      retryBackoff(fn, { retries: 3, baseDelay: 5 })
    ).rejects.toThrow("fail");
  });

  it("should respect custom factor and maxDelay", async () => {
    let attempt = 0;
    const delays: number[] = [];
    const fn = async () => {
      if (attempt++ < 2) throw new Error("fail");
      return "ok";
    };

    // Mock setTimeout to capture delays
    const originalSetTimeout = global.setTimeout;
    vi.spyOn(global, "setTimeout").mockImplementation(
      (cb: any, ms?: number) => {
        delays.push(ms ?? 0);
        return originalSetTimeout(cb, 0);
      }
    );

    const result = await retryBackoff(fn, {
      retries: 3,
      baseDelay: 10,
      factor: 3,
      maxDelay: 25,
    });

    expect(result).toBe("ok");
    expect(delays).toEqual([10, 25]); // first delay 10, second capped at maxDelay 25

    vi.restoreAllMocks();
  });

  it("should call onError callback on each failed attempt with correct attempt number", async () => {
    const errors: { message: string; attempt: number }[] = [];
    let attempt = 0;
    const fn = async () => {
      attempt++;
      throw new Error(`fail ${attempt}`);
    };

    await expect(
      retryBackoff(fn, {
        retries: 2,
        baseDelay: 1,
        onError: (err, attemptNum) =>
          errors.push({ message: err.message, attempt: attemptNum }),
      })
    ).rejects.toThrow();

    expect(errors).toEqual([
      { message: "fail 1", attempt: 1 },
      { message: "fail 2", attempt: 2 },
    ]);
  });
});
