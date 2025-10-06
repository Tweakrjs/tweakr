/**
 * @vitest-environment jsdom
 */

import { downloadFile } from "../../src/browser/downloadFile";

describe("downloadFile", () => {
  it("creates an anchor and triggers click", () => {
    const click = vi.fn();

    // mock append/remove to not actually modify the DOM
    const append = vi
      .spyOn(document.body, "appendChild")
      .mockImplementation(<T extends Node>(node: T): T => node);
    const remove = vi
      .spyOn(document.body, "removeChild")
      .mockImplementation(<T extends Node>(node: T): T => node);

    // mock createElement to return our fake anchor
    document.createElement = vi.fn(() => ({
      click,
      set href(_value: string) {},
      set download(_value: string) {},
    })) as any;

    downloadFile("blob:test", "file.txt");

    expect(click).toHaveBeenCalled();

    append.mockRestore();
    remove.mockRestore();
  });
});
