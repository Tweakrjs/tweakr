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
    expect(results).toEqual([1, 1, 1]); // all promises resolve with same result
    expect(count).toBe(1); // function called only once
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
    expect(result).toBe(2); // function called again
    expect(count).toBe(2);
  });

  it("should pass arguments correctly", async () => {
    const fn = debouncePromise(async (x: number, y: number) => x + y, 20);
    const result = await fn(2, 3);
    expect(result).toBe(5);
  });
});
