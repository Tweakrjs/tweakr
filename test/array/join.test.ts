import { join } from "../../src/array/join";

describe("join", () => {
  it("joins array elements with separator", () => {
    expect(join(["a", "b", "c"], "-")).toBe("a-b-c");
  });
});
