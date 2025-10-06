import { head } from "../../src/array/head";

describe("head", () => {
  it("returns first element", () => {
    expect(head([10, 20, 30])).toBe(10);
  });
});
