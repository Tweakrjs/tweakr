import { delay } from "../../src/function/delay";

describe("delay", () => {
  it("should resolve after given time", async () => {
    const start = Date.now();
    await delay(100);
    const diff = Date.now() - start;
    expect(diff).toBeGreaterThanOrEqual(90);
  });
});
