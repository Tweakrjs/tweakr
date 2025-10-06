import { sleep } from "../../src/async/sleep";

describe("sleep", () => {
  it("should delay for specified ms", async () => {
    const start = Date.now();
    await sleep(30);
    expect(Date.now() - start).toBeGreaterThanOrEqual(30);
  });
});
