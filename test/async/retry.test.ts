import { retry } from "../../src/async/retry";

describe("retry", () => {
  it("should retry failed promise", async () => {
    let count = 0;
    const fn = async () => {
      if (count++ < 2) throw new Error("fail");
      return "ok";
    };
    const result = await retry(fn, 3);
    expect(result).toBe("ok");
  });
});
