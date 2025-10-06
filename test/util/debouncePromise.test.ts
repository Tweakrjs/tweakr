import { debouncePromise } from "../../src/util/debouncePromise";

describe("debouncePromise", () => {
  it("should debounce async function calls", async () => {
    let count = 0;
    const fn = debouncePromise(async () => {
      count += 1;
      return count;
    }, 50);

    const p1 = fn();
    const p2 = fn();
    const result = await p2;
    expect(result).toBe(1);
    expect(count).toBe(1);
    await p1; // ensure previous promise resolves too
  });
});
