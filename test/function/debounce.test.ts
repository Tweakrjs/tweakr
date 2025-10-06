import { debounce } from "../../src/function/debounce";

describe("debounce", () => {
  it("should delay execution until timeout", async () => {
    let count = 0;
    const fn = debounce(() => count++, 50);
    fn();
    fn();
    await new Promise((r) => setTimeout(r, 70));
    expect(count).toBe(1);
  });
});
