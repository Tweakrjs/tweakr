import { deepFreeze } from "../../src/util/deepFreeze";

describe("deepFreeze", () => {
  it("should freeze object deeply", () => {
    const obj: any = { a: { b: 2 } };
    const frozen = deepFreeze(obj);
    expect(Object.isFrozen(frozen)).toBe(true);
    expect(Object.isFrozen(frozen.a)).toBe(true);
  });
});
