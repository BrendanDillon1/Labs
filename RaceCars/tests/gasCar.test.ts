import { GasCar } from "../src/gasCar";

test("GasCar initializes correctly", () => {
  const car = new GasCar("TeamGas", 5);
  expect(car.team).toBe("TeamGas");
  expect(car.speed).toBe(0);
  expect(car.fuel).toBe(5);
});

test("GasCar default fuel is 10", () => {
  const car = new GasCar("TeamGas");
  expect(car.fuel).toBe(10);
});

test("GasCar accelerates and consumes fuel correctly", () => {
  const car = new GasCar("TeamGas", 5);
  car.accelerate();
  expect(car.speed).toBe(2);
  expect(car.fuel).toBe(4);
});

test("GasCar isFuelEmpty returns true when fuel is 0", () => {
  const car = new GasCar("TeamGas", 1);
  car.accelerate();
  expect(car.isFuelEmpty()).toBeTruthy();
});
