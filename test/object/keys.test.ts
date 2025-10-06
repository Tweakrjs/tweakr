import { keys } from "../../src/object/keys";

describe("keys", () => {
  it("should return object keys", () => {
    const obj = { a: 1, b: 2 };
    expect(keys(obj)).toEqual(["a", "b"]);
  });
});
