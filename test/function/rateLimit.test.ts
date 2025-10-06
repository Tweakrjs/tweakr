import { rateLimit } from "../../src/function/rateLimit";

describe("rateLimit", () => {
  it("should not exceed rate per interval", async () => {
    let count = 0;
    const fn = rateLimit(() => count++, 2);
    for (let i = 0; i < 5; i++) fn();
    await new Promise((r) => setTimeout(r, 120));
    expect(count).toBeLessThanOrEqual(2);
  });
});
