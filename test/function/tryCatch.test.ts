import { tryCatch } from "../../src/function/tryCatch";

describe("tryCatch", () => {
  it("should handle errors with fallback", () => {
    const fn = tryCatch(
      () => {
        throw new Error("fail");
      },
      () => "fallback"
    );
    expect(fn()).toBe("fallback");
  });
});
