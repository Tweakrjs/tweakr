import { omit } from "../../src/object/omit";

describe("omit", () => {
  it("should remove specified keys", () => {
    const obj = { a: 1, b: 2, c: 3 };
    expect(omit(obj, ["b", "c"])).toEqual({ a: 1 });
  });
});
