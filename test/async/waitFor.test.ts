import { waitFor } from "../../src/async/waitFor";

describe("waitFor", () => {
  it("should resolve when condition met", async () => {
    let ready = false;
    setTimeout(() => (ready = true), 30);
    await waitFor(() => ready, 10, 100);
    expect(ready).toBe(true);
  });
});
