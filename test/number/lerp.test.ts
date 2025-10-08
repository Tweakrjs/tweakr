import { lerp } from "../../src/number/lerp";

describe("lerp", () => {
  it.each([
    [0, 10, 0.5, 5],
    [5, 15, 0, 5],
    [5, 15, 1, 15],
    [-10, 10, 0.5, 0],
    [0, 100, 0.25, 25],
  ])("lerp(%f, %f, %f) = %f", (start, end, t, expected) => {
    expect(lerp(start, end, t)).toBe(expected);
  });

  it("should throw for non-finite numbers", () => {
    expect(() => lerp(NaN, 0, 0.5)).toThrow();
    expect(() => lerp(0, Infinity, 0.5)).toThrow();
    expect(() => lerp(0, 10, -Infinity)).toThrow();
  });

  it("should throw TypeError for non-finite numbers", () => {
    expect(() => lerp(NaN, 10, 0.5)).toThrow(TypeError);
    expect(() => lerp(0, Infinity, 0.5)).toThrow(TypeError);
    expect(() => lerp(0, 10, NaN)).toThrow(TypeError);
  });
});
