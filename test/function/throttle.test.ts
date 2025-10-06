import { throttle } from "../../src/function/throttle";

describe("throttle", () => {
  it("should throttle calls within window", async () => {
    let count = 0;
    const fn = throttle(() => count++, 100);
    fn();
    fn();
    await new Promise((r) => setTimeout(r, 150));
    fn();
    expect(count).toBe(2);
  });
});
