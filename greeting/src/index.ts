import { Greeter } from "./greeter";
import { JavaScriptGreeter } from "./JavaScriptGreeter";
import { LoudGreeter } from "./LoudGreeter";
import { HtmlGreeter } from "./htmlgreeter";

const greeter = new Greeter("Hello");
const javaScriptGreeter = new JavaScriptGreeter("Hello");
const loudGreeter = new LoudGreeter("Hello");
const htmlGreeter = new HtmlGreeter("Hello");

console.log(greeter.greet("Grant"));
console.log(javaScriptGreeter.greet("Grant"));
console.log(loudGreeter.greet("Grant"));
console.log(htmlGreeter.greet("Grant"));
