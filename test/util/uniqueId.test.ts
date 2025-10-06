import { uniqueId } from "../../src/util/uniqueId";

describe("uniqueId", () => {
  it("should generate unique ids with optional prefix", () => {
    const id1 = uniqueId("item_");
    const id2 = uniqueId("item_");
    expect(id1).not.toBe(id2);
    expect(id1.startsWith("item_")).toBe(true);
  });
});
