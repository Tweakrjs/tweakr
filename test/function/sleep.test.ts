import { sleep } from "../../src/function/sleep";

describe("sleep", () => {
  it("should pause for duration", async () => {
    const start = Date.now();
    await sleep(50);
    const diff = Date.now() - start;
    expect(diff).toBeGreaterThanOrEqual(45);
  });
});
