import { describe, it, expect } from "vitest";
import { pipeN } from "../../src/function/pipeN";

describe("pipeN", () => {
  it("pipes functions left-to-right", () => {
    const double = (x: number) => x * 2;
    const addOne = (x: number) => x + 1;
    const piped = pipeN(double, addOne);
    expect(piped(3)).toBe(7); // (3*2)+1
  });
});
