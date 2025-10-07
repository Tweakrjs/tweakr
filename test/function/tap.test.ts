import { describe, it, expect, vi } from "vitest";
import { tap } from "../../src/function/tap";

describe("tap", () => {
  it("calls the function and returns original value", () => {
    const spy = vi.fn();
    const result = tap(42, spy);
    expect(spy).toHaveBeenCalledWith(42);
    expect(result).toBe(42);
  });
});
