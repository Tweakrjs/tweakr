import { describe, it, expect } from "vitest";
import { groupBy } from "../../src/array/groupBy";

describe("groupBy", () => {
  it("groups objects by a key property", () => {
    const data = [
      { id: 1, type: "a" },
      { id: 2, type: "b" },
      { id: 3, type: "a" },
    ];
    const grouped = groupBy(data, (item) => item.type);
    expect(grouped).toEqual({
      a: [
        { id: 1, type: "a" },
        { id: 3, type: "a" },
      ],
      b: [{ id: 2, type: "b" }],
    });
  });

  it("handles undefined and null keys", () => {
    const data = [1, 2, undefined, null, 3];
    const grouped = groupBy(data, (n) => n);
    expect(grouped).toEqual({
      "1": [1],
      "2": [2],
      __undefined__: [undefined, null],
      "3": [3],
    });
  });

  it("works with primitive values as keys", () => {
    const data = ["apple", "banana", "apricot"];
    const grouped = groupBy(data, (s) => s[0]);
    expect(grouped).toEqual({
      a: ["apple", "apricot"],
      b: ["banana"],
    });
  });

  it("preserves original array order", () => {
    const data = [3, 1, 4, 1, 5, 9];
    const grouped = groupBy(data, (n) => (n % 2 === 0 ? "even" : "odd"));
    expect(grouped).toEqual({
      odd: [3, 1, 1, 5, 9],
      even: [4],
    });
  });

  it("returns empty object for empty array", () => {
    expect(groupBy([], (x) => x)).toEqual({});
  });
});
