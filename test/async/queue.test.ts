import { describe, it, expect } from "vitest";
import { queue } from "../../src/async/queue";

describe("queue", () => {
  it("runs tasks sequentially with concurrency = 1", async () => {
    const q = queue(1);
    const order: number[] = [];

    const p1 = q.add(async () => {
      order.push(1);
    });
    const p2 = q.add(async () => {
      order.push(2);
    });
    const p3 = q.add(async () => {
      order.push(3);
    });

    await Promise.all([p1, p2, p3]);

    expect(order).toEqual([1, 2, 3]);
    expect(q.size()).toBe(0);
    expect(q.running()).toBe(0);
  });

  it("runs tasks in parallel with concurrency > 1", async () => {
    const q = queue(2);
    const order: number[] = [];

    const p1 = q.add(async () => {
      await new Promise((r) => setTimeout(r, 30));
      order.push(1);
    });
    const p2 = q.add(async () => {
      await new Promise((r) => setTimeout(r, 10));
      order.push(2);
    });
    const p3 = q.add(async () => {
      order.push(3);
    });

    await Promise.all([p1, p2, p3]);

    // Tasks complete based on timing, not enqueue order
    expect(order).toEqual([2, 3, 1]);
  });

  it("does not stop on task errors", async () => {
    const q = queue(1);
    const order: number[] = [];

    const p1 = q
      .add(async () => {
        throw new Error("fail");
      })
      .catch(() => {});
    const p2 = q.add(async () => {
      order.push(1);
    });

    await Promise.all([p1, p2]);

    expect(order).toEqual([1]);
  });

  it("returns the result of tasks", async () => {
    const q = queue(1);

    const result1 = await q.add(async () => 42);
    const result2 = await q.add(async () => 7);

    expect(result1).toBe(42);
    expect(result2).toBe(7);
  });

  it("maintains correct size and running counts", async () => {
    const q = queue(2);
    const order: number[] = [];

    const p1 = q.add(async () => {
      await new Promise((r) => setTimeout(r, 20));
      order.push(1);
    });
    const p2 = q.add(async () => {
      await new Promise((r) => setTimeout(r, 10));
      order.push(2);
    });
    const p3 = q.add(async () => {
      order.push(3);
    });

    expect(q.running()).toBeLessThanOrEqual(2);
    expect(q.size()).toBeGreaterThan(0);

    await Promise.all([p1, p2, p3]);

    expect(q.running()).toBe(0);
    expect(q.size()).toBe(0);
  });
});
