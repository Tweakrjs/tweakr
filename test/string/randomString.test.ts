import { randomString } from "../../src/string/randomString";

describe("randomString", () => {
  it("should generate string of correct length", () => {
    const str = randomString(10);
    expect(str).toHaveLength(10);
  });
});
