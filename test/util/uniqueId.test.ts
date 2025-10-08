import { uniqueId, resetUniqueId } from "../../src/util/uniqueId";

describe("uniqueId", () => {
  afterEach(() => {
    // Reset counter after each test to ensure predictability
    resetUniqueId();
  });

  it("should generate unique IDs sequentially", () => {
    const first = uniqueId();
    const second = uniqueId();
    expect(first).not.toBe(second);
  });

  it("should generate IDs with prefix", () => {
    const id = uniqueId("item-");
    expect(id.startsWith("item-")).toBe(true);
  });

  it("should handle empty string prefix", () => {
    const id = uniqueId("");
    expect(typeof id).toBe("string");
  });

  it("should return string type", () => {
    expect(typeof uniqueId()).toBe("string");
  });

  it("should maintain uniqueness across multiple calls", () => {
    const ids = Array.from({ length: 10 }, () => uniqueId());
    const uniqueSet = new Set(ids);
    expect(uniqueSet.size).toBe(ids.length);
  });

  it("should reset counter correctly", () => {
    const id1 = uniqueId("a-");
    resetUniqueId();
    const id2 = uniqueId("a-");
    expect(id2).toBe("a-1"); // counter resets
  });
});
