import { waitFor } from "../../src/util/waitFor";

describe("waitFor", () => {
  it("should resolve true when condition becomes true", async () => {
    let flag = false;
    setTimeout(() => {
      flag = true;
    }, 50);
    const result = await waitFor(() => flag, 200, 10);
    expect(result).toBe(true);
  });

  it("should resolve false when timeout reached", async () => {
    const result = await waitFor(() => false, 50, 10);
    expect(result).toBe(false);
  });
});
