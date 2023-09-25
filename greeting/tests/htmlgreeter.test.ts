import { HtmlGreeter } from "../src/htmlgreeter";

describe("HtmlGreeter", () => {
  test("should wrap the greeting in the specified HTML tag with different greetings, names, and tagNames", () => {
    const htmlGreeter1 = new HtmlGreeter("Hello", "h1");
    expect(htmlGreeter1.greet("Grant")).toBe("<h1>Hello, Grant!</h1>");

    const htmlGreeter2 = new HtmlGreeter("Hi", "p");
    expect(htmlGreeter2.greet("John")).toBe("<p>Hi, John!</p>");
  });

  test('should use default "h1" tagName when the second constructor argument is left off', () => {
    const htmlGreeter = new HtmlGreeter("Hello");
    expect(htmlGreeter.greet("Grant")).toBe("<h1>Hello, Grant!</h1>");
  });
});
