import { describe, it, expect } from "vitest";
import { onceNAsync } from "../../src/function/onceNAsync";

describe("onceNAsync", () => {
  it("runs async function only once per N calls", async () => {
    let called = 0;
    const fn = onceNAsync(2, async () => called++);
    await fn(); // called
    await fn(); // called
    await fn(); // ignored
    expect(called).toBe(2);
  });
});
