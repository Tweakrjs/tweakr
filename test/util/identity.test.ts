import { identity } from "../../src/util/identity";

describe("identity", () => {
  it("should return the same value", () => {
    const obj = { a: 1 };
    expect(identity(obj)).toBe(obj);
    expect(identity(5)).toBe(5);
  });
});
