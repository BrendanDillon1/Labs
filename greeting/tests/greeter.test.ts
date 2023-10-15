import { Greeter } from "../src/greeter";

describe("Greeter", () => {
  test("should greet with different greetings and names", () => {
    const greeter1 = new Greeter("Hello");
    expect(greeter1.greet("Grant")).toBe("Hello, Grant!");

    const greeter2 = new Greeter("Hi");
    expect(greeter2.greet("John")).toBe("Hi, John!");
  });
});
