import { interpolate } from "../../src/lang/interpolate";

describe("interpolate", () => {
  it("should replace template variables", () => {
    const template = "Hello {name}, you have {count} messages";
    expect(interpolate(template, { name: "Alice", count: 5 })).toBe(
      "Hello Alice, you have 5 messages"
    );
    expect(interpolate(template, { name: "Bob" })).toBe(
      "Hello Bob, you have {count} messages"
    );
  });
});
