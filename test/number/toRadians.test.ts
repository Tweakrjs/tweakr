import { toRadians } from "../../src/number/toRadians";

describe("toRadians", () => {
  it("should convert degrees to radians", () => {
    expect(toRadians(180)).toBeCloseTo(Math.PI);
    expect(toRadians(90)).toBeCloseTo(Math.PI / 2);
  });
});
