import { retry } from "../../src/function/retry";

describe("retry", () => {
  it("should retry until success", async () => {
    let tries = 0;
    const fn = async () => {
      tries++;
      if (tries < 3) throw new Error("fail");
      return "ok";
    };
    const result = await retry(fn, { retries: 3, delay: 10 });
    expect(result).toBe("ok");
  });
});
