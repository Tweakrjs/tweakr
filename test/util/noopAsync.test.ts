import { noopAsync } from "../../src/util/noopAsync";

describe("noopAsync", () => {
  it("should resolve to void without throwing", async () => {
    await expect(noopAsync()).resolves.toBeUndefined();
  });
});
