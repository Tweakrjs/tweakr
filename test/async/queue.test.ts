import { queue } from "../../src/async/queue";

describe("queue", () => {
  it("should respect concurrency", async () => {
    const q = queue(1);
    let order: number[] = [];
    q.add(async () => void order.push(1));
    q.add(async () => void order.push(2));
    await new Promise((r) => setTimeout(r, 50));
    expect(order).toEqual([1, 2]);
  });
});
