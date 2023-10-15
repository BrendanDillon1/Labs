import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter", () => {
  test("should add extra exclamation points with and without calling addVolume", () => {
    const loudGreeter = new LoudGreeter("Hello");

    expect(loudGreeter.greet("Grant")).toBe("Hello, Grant!!");

    loudGreeter.addVolume();
    expect(loudGreeter.greet("Grant")).toBe("Hello, Grant!!!");

    loudGreeter.addVolume();
    loudGreeter.addVolume();
    expect(loudGreeter.greet("John")).toBe("Hello, John!!!!!");
  });
});
