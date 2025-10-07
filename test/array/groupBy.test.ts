import { groupBy } from "../../src/array/groupBy";

describe("groupBy", () => {
  it("should group objects by a string key", () => {
    const data = [
      { type: "fruit", name: "apple" },
      { type: "fruit", name: "banana" },
      { type: "vegetable", name: "carrot" },
    ];
    const grouped = groupBy(data, (item) => item.type);

    expect(grouped).toEqual({
      fruit: [
        { type: "fruit", name: "apple" },
        { type: "fruit", name: "banana" },
      ],
      vegetable: [{ type: "vegetable", name: "carrot" }],
    });
  });

  it("should handle undefined and null keys safely", () => {
    const data = [
      { type: "fruit", name: "apple" },
      { type: null, name: "unknown1" },
      { type: undefined, name: "unknown2" },
    ];
    const grouped = groupBy(data, (item) => item.type);

    expect(grouped).toEqual({
      fruit: [{ type: "fruit", name: "apple" }],
      __undefined__: [
        { type: null, name: "unknown1" },
        { type: undefined, name: "unknown2" },
      ],
    });
  });

  it("should handle numeric keys", () => {
    const data = [
      { id: 1, value: "a" },
      { id: 2, value: "b" },
      { id: 1, value: "c" },
    ];
    const grouped = groupBy(data, (item) => item.id);

    expect(grouped).toEqual({
      "1": [
        { id: 1, value: "a" },
        { id: 1, value: "c" },
      ],
      "2": [{ id: 2, value: "b" }],
    });
  });

  it("should return an empty object for an empty array", () => {
    const grouped = groupBy([], (item: any) => item.key);
    expect(grouped).toEqual({});
  });

  it("should work with complex key functions", () => {
    const data = ["apple", "banana", "apricot", "blueberry"];
    const grouped = groupBy(data, (item) => item[0]); // group by first letter
    expect(grouped).toEqual({
      a: ["apple", "apricot"],
      b: ["banana", "blueberry"],
    });
  });
});
