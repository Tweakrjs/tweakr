import { invert } from "../../src/object/invert";

describe("invert", () => {
  it("should invert key-value pairs", () => {
    const obj = { a: "x", b: "y" };
    expect(invert(obj)).toEqual({ x: "a", y: "b" });
  });
});
