import { uniqueId } from "../../src/util/uniqueId";

describe("uniqueId", () => {
  it("should generate unique IDs sequentially", () => {
    const first = uniqueId();
    const second = uniqueId();
    expect(first).not.toBe(second);
  });

  it("should generate IDs with prefix", () => {
    const id = uniqueId("item-");
    expect(id.startsWith("item-")).toBe(true);
  });

  it("should return string type", () => {
    expect(typeof uniqueId()).toBe("string");
  });

  it("should maintain uniqueness across multiple calls", () => {
    const ids = Array.from({ length: 10 }, () => uniqueId());
    const uniqueSet = new Set(ids);
    expect(uniqueSet.size).toBe(ids.length);
  });
});
