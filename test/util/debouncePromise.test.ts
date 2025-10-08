import { debouncePromise } from "../../src/util/debouncePromise";

describe("debouncePromise", () => {
  it("should debounce async function calls and resolve all promises", async () => {
    let count = 0;
    const fn = debouncePromise(async () => {
      count += 1;
      return count;
    }, 50);

    const p1 = fn();
    const p2 = fn();
    const p3 = fn();

    const results = await Promise.all([p1, p2, p3]);
    expect(results).toEqual([1, 1, 1]);
    expect(count).toBe(1);
  });

  it("should call function again after wait time", async () => {
    let count = 0;
    const fn = debouncePromise(async () => {
      count += 1;
      return count;
    }, 50);

    await fn();
    await new Promise((r) => setTimeout(r, 60)); // wait longer than debounce
    const result = await fn();
    expect(result).toBe(2);
    expect(count).toBe(2);
  });

  it("should pass arguments correctly", async () => {
    const fn = debouncePromise(async (x: number, y: number) => x + y, 20);
    const result = await fn(2, 3);
    expect(result).toBe(5);
  });

  it("should use last call's arguments if multiple calls within wait", async () => {
    const fn = debouncePromise(async (x: number) => x * 2, 30);

    const p1 = fn(1);
    const p2 = fn(2);
    const p3 = fn(3);

    const results = await Promise.all([p1, p2, p3]);
    expect(results).toEqual([6, 6, 6]); // last call (3) used
  });

  it("should propagate errors to all pending promises", async () => {
    const fn = debouncePromise(async () => {
      throw new Error("fail");
    }, 20);

    const p1 = fn();
    const p2 = fn();
    const p3 = fn();

    await expect(Promise.all([p1, p2, p3])).rejects.toThrow("fail");
  });

  it("should handle mixed return types correctly", async () => {
    const fn = debouncePromise(async (flag: boolean) => (flag ? "yes" : 0), 20);

    const r1 = fn(true);
    const r2 = fn(false);

    const results = await Promise.all([r1, r2]);
    // Both resolve to the last call result (false => 0)
    expect(results).toEqual([0, 0]);
  });

  it("should handle rapid sequential calls with different args", async () => {
    const fn = debouncePromise(async (x: number) => x + 10, 10);

    const p1 = fn(1);
    const p2 = fn(2);

    await new Promise((r) => setTimeout(r, 15)); // wait for debounce to flush

    const p3 = fn(3);

    const results1 = await Promise.all([p1, p2]);
    const results2 = await p3;

    expect(results1).toEqual([2 + 10, 2 + 10]); // last args used (2)
    expect(results2).toBe(13);
  });
});
