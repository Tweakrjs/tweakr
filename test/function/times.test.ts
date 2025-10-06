import { times } from "../../src/function/times";

describe("times", () => {
  it("should run function N times", () => {
    let count = 0;
    times(5, () => count++);
    expect(count).toBe(5);
  });
});
