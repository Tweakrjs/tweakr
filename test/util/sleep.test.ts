import { sleep } from "../../src/util/sleep";

describe("sleep", () => {
  it("should delay execution", async () => {
    const start = Date.now();
    await sleep(50);
    const elapsed = Date.now() - start;
    expect(elapsed).toBeGreaterThanOrEqual(50);
  });
});
