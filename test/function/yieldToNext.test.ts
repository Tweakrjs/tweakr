import { yieldToNext } from "../../src/function/yieldToNext";

describe("yieldToNext", () => {
  it("should yield to next microtask", async () => {
    let done = false;
    const promise = (async () => {
      await yieldToNext();
      done = true;
    })();
    expect(done).toBe(false);
    await promise;
    expect(done).toBe(true);
  });
});
