import { noop } from "../../src/function/noop";

describe("noop", () => {
  it("should do nothing", () => {
    expect(noop()).toBeUndefined();
  });
});
