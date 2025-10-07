import { describe, it, expect } from "vitest";
import { retryAsync } from "../../src/function/retryAsync";

describe("retryAsync", () => {
  it("retries until success", async () => {
    let attempts = 0;
    const fn = async () => {
      attempts++;
      if (attempts < 3) throw new Error("fail");
      return "ok";
    };
    const result = await retryAsync(fn, 5);
    expect(result).toBe("ok");
    expect(attempts).toBe(3);
  });

  it("throws if max attempts exceeded", async () => {
    let attempts = 0;
    const fn = async () => {
      attempts++;
      throw new Error("fail");
    };
    await expect(retryAsync(fn, 2)).rejects.toThrow("fail");
    expect(attempts).toBe(2);
  });
});
