import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter", () => {
  test("should wrap the greeting in a console.log with different greetings and names", () => {
    const greeter1 = new JavaScriptGreeter("Hello");
    expect(greeter1.greet("Grant")).toBe("console.log('Hello, Grant!')");

    const greeter2 = new JavaScriptGreeter("Hi");
    expect(greeter2.greet("John")).toBe("console.log('Hi, John!')");
  });
});
