import { describe, it, expect } from "vitest";
import { afterAsync } from "../../src/function/afterAsync";

describe("afterAsync", () => {
  it("runs function after N calls", async () => {
    let called = 0;
    const fn = afterAsync(3, async () => called++);
    await fn(); // not run
    expect(called).toBe(0);
    await fn(); // not run
    expect(called).toBe(0);
    await fn(); // run
    expect(called).toBe(1);
  });
});
