import { pick } from "../../src/object/pick";

describe("pick", () => {
  it("should select specified keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(pick(obj, ["a", "c"])).toEqual({ a: 1, c: 3 });
  });
});
