import { stripAccents } from "../../src/string/stripAccents";

describe("stripAccents", () => {
  it("should remove accents from characters", () => {
    expect(stripAccents("café")).toBe("cafe");
    expect(stripAccents("àéîõü")).toBe("aeiou");
  });
});
