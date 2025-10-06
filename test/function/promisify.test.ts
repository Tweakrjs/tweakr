import { promisify } from "../../src/function/promisify";

describe("promisify", () => {
  it("should convert callback to Promise", async () => {
    const asyncCb = (n: number, cb: (err: any, res?: number) => void) =>
      setTimeout(() => cb(null, n * 2), 10);
    const fn = promisify(asyncCb);
    const result = await fn(2);
    expect(result).toBe(4);
  });
});
