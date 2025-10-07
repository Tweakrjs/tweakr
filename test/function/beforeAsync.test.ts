import { describe, it, expect } from "vitest";
import { beforeAsync } from "../../src/function/beforeAsync";

describe("beforeAsync", () => {
  it("runs function only N times", async () => {
    let called = 0;
    const fn = beforeAsync(2, async () => called++);
    await fn(); // 1
    await fn(); // 2
    await fn(); // ignored
    expect(called).toBe(2);
  });
});
