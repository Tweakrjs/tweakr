import { tryCatch } from "../../src/function/tryCatch";

describe("tryCatch", () => {
  it("returns normal result when no error occurs", () => {
    const fn = tryCatch(
      () => 42,
      () => 0
    );
    expect(fn()).toBe(42);
  });

  it("handles errors and returns fallback result", () => {
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      () => "fallback"
    );
    expect(fn()).toBe("fallback");
  });

  it("passes the caught error to the fallback function", () => {
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
    const result = fn();
    expect(result).toBe("fallback");
    expect(caughtError).toBeInstanceOf(Error);
    expect((caughtError as Error).message).toBe("fail");
  });

  it("logs the error when log option is enabled", () => {
    const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      () => "fallback",
      { log: true }
    );
    fn();
    expect(consoleSpy).toHaveBeenCalledWith(
      "tryCatch caught error:",
      expect.any(Error)
    );
    consoleSpy.mockRestore();
  });
});
