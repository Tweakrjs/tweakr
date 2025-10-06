import { onceAsync } from "../../src/async/onceAsync";

describe("onceAsync", () => {
  it("should only execute once", async () => {
    const fn = vi.fn(async () => "done");
    const once = onceAsync(fn);
    await once();
    await once();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
