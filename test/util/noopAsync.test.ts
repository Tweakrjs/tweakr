import { noopAsync } from "../../src/util/noopAsync";

describe("noopAsync", () => {
  it("should resolve without doing anything", async () => {
    await expect(noopAsync()).resolves.toBeUndefined();
  });
});
