import { retryBackoff } from "../../src/async/retryBackoff";

describe("retryBackoff", () => {
  it("should retry with exponential backoff", async () => {
    let count = 0;
    const fn = async () => {
      if (count++ < 2) throw new Error("fail");
      return "done";
    };
    const result = await retryBackoff(fn, 3);
    expect(result).toBe("done");
  });
});
