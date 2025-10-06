import { identity } from "../../src/util/identity";

describe("identity", () => {
  it("should return the same value passed", () => {
    expect(identity(42)).toBe(42);
    expect(identity("test")).toBe("test");
    const obj = { a: 1 };
    expect(identity(obj)).toBe(obj); // same reference
    const arr = [1, 2, 3];
    expect(identity(arr)).toBe(arr); // same reference
  });
});
