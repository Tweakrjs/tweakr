import { toDegrees } from "../../src/number/toDegrees";

describe("toDegrees", () => {
  it("should convert radians to degrees", () => {
    expect(toDegrees(Math.PI)).toBeCloseTo(180);
    expect(toDegrees(Math.PI / 2)).toBeCloseTo(90);
  });
});
