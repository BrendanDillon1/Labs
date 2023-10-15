import { Greeter } from "../src/greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";

  addVolume(): void {
    this.extra += "!";
  }

  greet(name: string): string {
    return super.greet(name) + this.extra;
  }
}
