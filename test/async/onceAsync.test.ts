import { describe, it, expect, vi } from "vitest";
import { onceAsync } from "../../src/async/onceAsync";

describe("onceAsync", () => {
  it("should only execute once", async () => {
    const fn = vi.fn(async () => "done");
    const once = onceAsync(fn);
    await once();
    await once();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should return same resolved result for all calls", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const once = onceAsync(fn);
    const first = await once(2);
    const second = await once(5);
    expect(first).toBe(4);
    expect(second).toBe(4);
  });

  it("should preserve `this` context", async () => {
    const obj = {
      value: 42,
      getValue: onceAsync(async function (this: any) {
        return this.value;
      }),
    };
    expect(await obj.getValue()).toBe(42);
  });

  it("should handle sync throws as async rejections", async () => {
    const fn = onceAsync(async () => {
      throw new Error("fail");
    });
    await expect(fn()).rejects.toThrow("fail");
  });
});
