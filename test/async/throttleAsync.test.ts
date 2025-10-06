import { throttleAsync } from "../../src/async/throttleAsync";

describe("throttleAsync", () => {
  it("should throttle calls", async () => {
    const fn = vi.fn(async () => "ok");
    const throttled = throttleAsync(fn, 50);
    await throttled();
    await throttled();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
