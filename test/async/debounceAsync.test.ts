import { debounceAsync } from "../../src/async/debounceAsync";

describe("debounceAsync", () => {
  it("should delay execution", async () => {
    const fn = vi.fn(async (x: number) => x * 2);
    const debounced = debounceAsync(fn, 50);
    debounced(2);
    debounced(3);
    await new Promise((r) => setTimeout(r, 60));
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
