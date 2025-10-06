import { defer } from "../../src/function/defer";

describe("defer", () => {
  it("should run on next tick", async () => {
    let done = false;
    defer(() => {
      done = true;
    });
    expect(done).toBe(false);
    await Promise.resolve();
    expect(done).toBe(true);
  });
});
