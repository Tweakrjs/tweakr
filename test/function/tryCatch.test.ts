import { describe, it, expect, vi } from "vitest";
import { tryCatch } from "../../src/function/tryCatch";

describe("tryCatch", () => {
  it("returns normal result when no error occurs (sync)", async () => {
    const fn = tryCatch(
      () => 42,
      () => 0
    );
    expect(await fn()).toBe(42);
  });

  it("handles errors and returns fallback result (sync)", async () => {
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      () => "fallback"
    );
    expect(await fn()).toBe("fallback");
  });

  it("passes the caught error to the fallback function (sync)", async () => {
    let caughtError: unknown;
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      (error) => {
        caughtError = error;
        return "fallback";
      }
    );
    const result = await fn();
    expect(result).toBe("fallback");
    expect(caughtError).toBeInstanceOf(Error);
    expect((caughtError as Error).message).toBe("fail");
  });

  it("logs the error when log option is enabled", async () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      () => "fallback",
      { log: true }
    );
    await fn();
    expect(consoleSpy).toHaveBeenCalledWith(
      "tryCatch caught error:",
      expect.any(Error)
    );
    consoleSpy.mockRestore();
  });

  it("works with async functions and fallbacks", async () => {
    const fn = tryCatch(
      async () => {
        throw new Error("async fail");
      },
      async (err) => `handled: ${(err as Error).message}`
    );
    const result = await fn();
    expect(result).toBe("handled: async fail");
  });

  it("returns original value for successful async functions", async () => {
    const fn = tryCatch(
      async () => 123,
      async () => 0
    );
    expect(await fn()).toBe(123);
  });

  it("rethrows error when rethrow option is true", async () => {
    const fn = tryCatch(
      () => {
        throw new Error("boom");
      },
      () => "fallback",
      { rethrow: true }
    );
    await expect(fn()).rejects.toThrow("boom");
  });
});
