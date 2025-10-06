import { queue } from "../../src/async/queue";

describe("queue", () => {
  it("should run tasks sequentially with concurrency = 1", async () => {
    const q = queue(1);
    const order: number[] = [];

    q.add(async () => {
      order.push(1);
    });
    q.add(async () => {
      order.push(2);
    });
    q.add(async () => {
      order.push(3);
    });

    await new Promise((r) => setTimeout(r, 50));
    expect(order).toEqual([1, 2, 3]);
    expect(q.size()).toBe(0);
    expect(q.running()).toBe(0);
  });

  it("should run tasks in parallel with concurrency > 1", async () => {
    const q = queue(2);
    const order: number[] = [];

    q.add(async () => {
      await new Promise((r) => setTimeout(r, 30));
      order.push(1);
    });
    q.add(async () => {
      await new Promise((r) => setTimeout(r, 10));
      order.push(2);
    });
    q.add(async () => {
      order.push(3);
    });

    await new Promise((r) => setTimeout(r, 50));
    expect(order).toEqual([2, 3, 1]); // matches real concurrency
  });

  it("should not stop on task errors", async () => {
    const q = queue(1);
    const order: number[] = [];

    q.add(async () => {
      throw new Error("fail");
    });
    q.add(async () => {
      order.push(1);
    });

    await new Promise((r) => setTimeout(r, 50));
    expect(order).toEqual([1]);
  });
});
