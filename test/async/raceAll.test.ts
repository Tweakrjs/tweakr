import { raceAll } from "../../src/async/raceAll";

describe("raceAll", () => {
  it("should return first resolved promise", async () => {
    const tasks = [
      () => new Promise((r) => setTimeout(() => r("a"), 100)),
      () => new Promise((r) => setTimeout(() => r("b"), 10)),
    ];
    const result = await raceAll(tasks);
    expect(result).toBe("b");
  });
});
